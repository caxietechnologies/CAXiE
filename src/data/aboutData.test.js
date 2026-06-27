import aboutData from './aboutData.json';

describe('aboutData.json', () => {
  it('loads valid content for the About section', () => {
    expect(aboutData).toEqual(
      expect.objectContaining({
        profileImage: expect.any(String),
        bio: expect.any(String),
        quickFacts: expect.any(Array),
        motto: expect.any(String),
      })
    );
  });
});
