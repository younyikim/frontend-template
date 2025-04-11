export const sampleEndpoints = {
  getSample: () => 'https://jsonplaceholder.typicode.com/posts/1',
};

export const sampleKeys = {
  all: ['sample'],
  getSample: () => [...sampleKeys.all, 'get_sample'],
};
