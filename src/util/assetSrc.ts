type Asset = string | { src: string }

export const assetSrc = (asset: Asset) =>
    typeof asset === 'string' ? asset : asset.src
