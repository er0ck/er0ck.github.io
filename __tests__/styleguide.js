import { printOnFail, getJekyllData } from './lib/helpers';
import * as matchers from './lib/matchers';

expect.extend(matchers);

describe('Style guide', function() {
  beforeAll(() => {
    return getJekyllData().then(site => {
      this.site = site;
    });
  });

  test('avoid use of "<word> to announce" in posts', () => {
    const { posts } = this.site;
    posts.forEach(post => {
      printOnFail(post.path, () => {
        expect(post.content).not.toMatchLint(/([a-z]+) to announce/gi);
      });
    });
  });

  test('avoid use of more than one !', () => {
    const { posts } = this.site;
    posts.forEach(post => {
      printOnFail(post.path, () => {
        const count = post.content.split('!').length - 1 //number of escalamations
        expect(count) < 2;
      });
    });
  });

});
