// Connection between Sanity management system and next.js app
// @Sanity/client

import sanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'h3ccawwg', 
    dataset: 'production',
    apiVersion: '2023-07-29',
    useCdn: true,
    token: 'skhVZsLe9EiwrjjVoDfqmgWlzbNDLluVUjNzlvf3C3lwnnWhpObeqRcP87dimI384oWPPNbl1o3BGbhpxEAUDnnyPhGn5T2E0PUL2GbUwdpmzpRjK6haw82YN2RTnCP9rli9trkP6GM7ObDahLrbOys3uTSTmKtaRtlbKnmpuBp88eYMTP4N'
})

const builder = ImageUrlBuilder(client);

export const urlFor = ( source ) => builder.image(source)
