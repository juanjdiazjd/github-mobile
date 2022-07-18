import createGithub from './services/github';

const apiServices = {
  githubServices: createGithub(),
};

export default apiServices;
