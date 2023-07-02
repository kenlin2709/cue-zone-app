export interface IProduct{
    name: string,
    price: number,
    coverImgUrl: string,
    productImgUrls: string[],
    type: string,
    popular?: boolean,
    discountPrice?: number,
    description: string,
    brand: string,
    itemCode: string,
    limited?: number,
    inStock: number,
}
const sampleProductDetailData: IProduct = {
    name: '玉玺 Yuxi',
    price: 23888,
    coverImgUrl: 'PSX-01-cover.jpg',
    productImgUrls: [''],
    itemCode:'PSX-01',
    description: '',
    type: 'cue',
    brand: 'Peri',
    limited: 99,
    inStock: 0,

}

export const productDetailData: IProduct[] = [
    { name: '玉玺',
        price: 23888,
        coverImgUrl: 'PSX-01-cover.jpg',
        productImgUrls: ['PSX-01-1.jpg', 'PSX-01-2.jpg','PSX-01-3.jpg','PSX-01-4.jpg','PSX-01-5.jpg','PSX-01-6.jpg','PSX-01-7.jpg','PSX-01-8.jpg','PSX-01-9.jpg',],
        itemCode:'PSX-01',
        description: '皮尔力再次超越自我，推出全新旗舰之作, 皮尔力·玉玺, 以王者之名，领风云所向, 球杆不仅使用顶级材料、专利科技技术, 还有前所未有的外观设计，种种超凡之举<br/><br/>如今全部荟萃一身，造就您的至尊体验<br/><br/>皮尔力·玉玺，独享至尊<br/><br/>皮尔力·玉玺身上的每一个基因，都追求着一种整体之美。原装配置P8和P20形态前支，均为自主研发的科技前支，选材用料非常严苛。全部甄选AA级北美硬枫木，五年以上恒温恒湿自然脱水稳定木性，再优中择优，让您可以从容应对多种局面，全身心地享受每一次击球瞬间，以性能让挑战臣服。后把中轮上奢华的金色“双K”标识代表皮尔力品牌球杆的最高级别是锋芒，更是内涵, 刚劲挺拔的身姿与睥睨天下的气场相得益彰，这正是皮尔力·玉玺独有风范的精髓所在。初见精美绝伦的后把工艺，考究的用料和做工即令人仰慕，特别甄选贵族A级黑檀木为主料，精致奢雅的雕刻镶嵌图案汲取灵感自大千世界，将中国传统“如意”元素汇集其中，祈福禳安，吉祥如意，彰显古风雅致。极赋艺术性的中国花卉设计，仅仅约3.3*1.1cm的花卉图案就有28处镶嵌。悉心选用珍惜的郁金香木、黄花梨、五彩贝壳等材料，嵌于典雅而别致的后把之中，这一独特的饰面设计配搭黑色主体，丰富了层次感，于方寸间弥漫奢华美感，从细节彰显不凡品位。皮尔力·玉玺融合了一系列皮尔力独有的设计，后把配饰“PERI”品牌标志，为富有韵味的后把增添了耀目的点缀。<br/><br/>现代科技融合出众设计，皮尔力·玉玺后把内部十字碳纤通体专利技术，让每一次击球体验得到真切的提升<br/><br/>皮尔力·玉玺<br/><br/>为您诠释卓尔不群的风采, 他不仅仅是一支球杆，他更是您的世界的一部分, 外在：以傲人气度征服人心, 内修：拓一方天地，笑瞰风云，尽显尊崇本色<br/><br/>配置：皮尔力·玉玺球杆+双前支+双加长把+黄金蟒杆箱全套配件',
        type: 'cue',
        brand: 'Peri',
        limited: 99,
        inStock: 0,
    },
]

export const limitedroductData: IProduct[] = [
    { name: '玉玺',
        price: 23888,
        coverImgUrl: 'PSX-01-cover.jpg',
        productImgUrls: ['PSX-01-1.jpg', 'PSX-01-2.jpg','PSX-01-3.jpg','PSX-01-4.jpg','PSX-01-5.jpg','PSX-01-6.jpg','PSX-01-7.jpg','PSX-01-8.jpg','PSX-01-9.jpg',],
        itemCode:'PSX-01',
        description: '皮尔力再次超越自我，推出全新旗舰之作, 皮尔力·玉玺, 以王者之名，领风云所向, 球杆不仅使用顶级材料、专利科技技术, 还有前所未有的外观设计，种种超凡之举<br/><br/>如今全部荟萃一身，造就您的至尊体验<br/><br/>皮尔力·玉玺，独享至尊<br/><br/>皮尔力·玉玺身上的每一个基因，都追求着一种整体之美。原装配置P8和P20形态前支，均为自主研发的科技前支，选材用料非常严苛。全部甄选AA级北美硬枫木，五年以上恒温恒湿自然脱水稳定木性，再优中择优，让您可以从容应对多种局面，全身心地享受每一次击球瞬间，以性能让挑战臣服。后把中轮上奢华的金色“双K”标识代表皮尔力品牌球杆的最高级别是锋芒，更是内涵, 刚劲挺拔的身姿与睥睨天下的气场相得益彰，这正是皮尔力·玉玺独有风范的精髓所在。初见精美绝伦的后把工艺，考究的用料和做工即令人仰慕，特别甄选贵族A级黑檀木为主料，精致奢雅的雕刻镶嵌图案汲取灵感自大千世界，将中国传统“如意”元素汇集其中，祈福禳安，吉祥如意，彰显古风雅致。极赋艺术性的中国花卉设计，仅仅约3.3*1.1cm的花卉图案就有28处镶嵌。悉心选用珍惜的郁金香木、黄花梨、五彩贝壳等材料，嵌于典雅而别致的后把之中，这一独特的饰面设计配搭黑色主体，丰富了层次感，于方寸间弥漫奢华美感，从细节彰显不凡品位。皮尔力·玉玺融合了一系列皮尔力独有的设计，后把配饰“PERI”品牌标志，为富有韵味的后把增添了耀目的点缀。<br/><br/>现代科技融合出众设计，皮尔力·玉玺后把内部十字碳纤通体专利技术，让每一次击球体验得到真切的提升<br/><br/>皮尔力·玉玺<br/><br/>为您诠释卓尔不群的风采, 他不仅仅是一支球杆，他更是您的世界的一部分, 外在：以傲人气度征服人心, 内修：拓一方天地，笑瞰风云，尽显尊崇本色<br/><br/>配置：皮尔力·玉玺球杆+双前支+双加长把+黄金蟒杆箱全套配件',
        type: 'cue',
        brand: 'Peri',
        limited: 99,
        inStock: 0,
    },
]
