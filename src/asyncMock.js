const products = [
    {
        id: '1',
        name: 'PlayStation VR',
        price: 10000,
        category: 'Accesorios',
        img: 'https://gmedia.playstation.com/is/image/SIEPDC/psvr-overview-hardware-column-image-01-ps4-en-06jan20?$1600px$',
        stock: 500,
        description: 'Una experiencia en realidad virtual de la mano de PlayStation'
    },
    { id: '2', name: 'PlayStation 5', price: 2300, category: 'Consolas', img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIArgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAgYDBAcFAf/EADwQAAICAAQCBAoGCwAAAAAAAAABAgMEBRESITEGUWFxExQyQUJiY5GhwSRScoOx8BUiIzM1RFSBkpOy/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABcRAQEBAQAAAAAAAAAAAAAAAAARARL/2gAMAwEAAhEDEQA/ALmAAAAAAAAAAAAAAEZSUVqwJHxSUuT1Nayxy4ckZMO/1Wu0DMD42ktXwMUsQt0VFa6tLUDMAAAAAAAAAAAAAAAAAAAAAhOe3vMEm2z7u3N9jaIsoizx87lVXOidi0lxUZJtNcvOj12V/pavodM16NnyKhhsxdc4vxm2cFzhOW5e98T3MLdG+VbXWc6Vsl5y59GbHbCtvzR+RrJzosgAOagAAAAAAAAAAAAAAAAAA1mlHgu8iycjGzQizxOlMd2Ut/Vmme2zyekcd2TYh/V0fxGIo5duh61w+vVEpJeuh8dMC32IgsQAIoAAAAAAAAAAAAAAAAfHyPp8l5L7gNdkGSkQZpEWedni3ZPjF7Nv3cT0WaeZx35bi4rm6Zr4MDn2nA6B0Ujpluvaih6HQujUduVw7WQesACKAAAAAAAAAAAAAAAAEZeS+4kRn5DA12QZNkGaRFmG+O6myPXFr4GZmOfJgc6hxjF9h0bII7cqqOdqO17ep6HSMnW3LKe4it4AEAAAAAAAAAAAAYr7JVwbhB2S80U0jHTiLGv29ca5t8FGW7h7gNkGPwqPjuilqwMpCzyDWjib/D7XQnU3wnGziu1rgbFvkgYGRZJkGaR8ZjkZGQYHPrF9Jsj7Rr4nScsWmX0L1TnOIjtzC2Ptpf8AR0jArTBUr1ERWwACAAAAAAAAAAANbESej0NDHY2vB1RstfppJLm+vT+xtWzS1b00KdjZ4vNsRZfRh7baIvbBxi2kvzxNIsP6fy7+o074NEJZ7gZyrjCxy3TSb2tJdr17dCryyzHv+Tv/ANbJLLcfpp4le/u2KLwnpx85sOW6uPWVzIsZZZVPDYlON1L00lz2/nge9W9YhRkWfZMjqEGQZNkWBQ8YtM2uXtvmdHwvDC1fYRzvH/xu5e3+Z0bDrSiteqiKyAAgAAAAAAAAAACu59fOvCyoq/fXzVUF522e1gsLDB4SrD18I1x0731k7MPTbZCdlUJTg9Yya1cX2GRJID6AAK9n1fieYYXMILSE5eBu7nyZs4pYmzKb/FISlc0lHa9Hz46HqXU1X1uu6uNkH6MlqiUYRgtIpJdSKKI8TnGG9HFL7Vbf4oyVZ9mMHpZhvCaddcosvIFFRj0ohHhdgcRHraXD4mevpFgrPRxEfum/wLK4xfOKfeiPgKnxdcP8RRV6ci/SNtmOe6pyt3QjNc1w0fYWquLjXGL5paCMIx8mKXciRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=', stock: 36, description: 'Consola de nueva generación, de la mano de Sony' },
    { id: '3', name: 'PlayStation 4', price: 1200, category: 'Consolas', img: 'data:image/jpeg;base64,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', stock: 12, description: 'La antecesora de la playstation 5' }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}

export const getProductByName = (productName) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.name === productName))
        }, 1000)
    })
}
