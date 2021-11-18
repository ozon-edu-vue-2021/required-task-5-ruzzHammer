import _random from "lodash/random";

function importImages(require) {
  return require.keys().map(require);
}

export default function getRandomImage() {
  const images = importImages(
    require.context("@/assets/images/", false, /\.(webp)$/)
  );
  const index = _random(images.length - 1);
  return images[index];
}
