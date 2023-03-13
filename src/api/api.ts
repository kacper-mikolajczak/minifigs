import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

export const API = {
  createInstance(...params: Parameters<typeof axios.create>) {
    return applyCaseMiddleware(axios.create(...params));
  },
};

export type APIInstance = ReturnType<(typeof API)['createInstance']>;
