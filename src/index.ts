import * as core from '@actions/core';
import { GH_INPUT_LIST_TYPES } from './constants';
import { MAL } from './mal';

async function run() {
  try {
    const username = core.getInput('mal_username');
    if (!username) throw new Error('myanimelist username is required.');

    let selectedListType = core.getInput('mal_list_type');
    if (!GH_INPUT_LIST_TYPES.includes(selectedListType)) {
      core.warning(
        'list_type not specified or invalid must be "anime", "manga" or "both, defaulting to "both"',
      );
      selectedListType = 'both';
    }

    const user = new MAL(username);

    if (selectedListType === 'anime') await user.fetchAnimeList();
    else if (selectedListType === 'manga') await user.fetchMangaList();
    else {
      await user.fetchAnimeList();
      await user.fetchMangaList();
    }

    let outputDir = core.getInput('output_dir');
    if (!outputDir) {
      core.warning(
        'Output directory not specified, defaulting to the repository root.',
      );
      outputDir = '.';
    }

    await user.save(outputDir);
    await user.rawSave(outputDir);
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : 'An unexpected error occurred.',
    );
  }
}

run();
