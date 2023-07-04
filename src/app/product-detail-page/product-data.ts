
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
export interface IProductData{
    [key: string]: IProduct,
}
export const infinitySeriesProduct: string[] = [
    'INFINITYII-PX2-01','INFINITYII-PX2-02', 'INFINITYII-PX2-02A', 'INFINITYII-PX2-03', 'INFINITYII-PX2-03A', 'INFINITY-PX-02', 'INFINITY-PX-03',
]
export const limitedProduct: string[] = [
    'PSX-01', 'PSX-02', 'PWX-02', 'PT-SK1'
]
export const eleganceSeriesProduct: string[] = [
    'ELEGANCE-LV-04', 'ELEGANCE-LV-03', 'ELEGANCE-LV-02', 'ELEGANCE-LV-01', 'ELEGANCE-VK-01', 'ELEGANCE-VK-02', 'ELEGANCE-VK-03',
    'ELEGANCEIII-V30-04', 'ELEGANCEIII-V30-05', 'ELEGANCEIII-V30-03', 'ELEGANCEIII-V30-01',
]
export const taichiSeriesProduct: string[] = [
    'TaiChiII-PS2-01', 'TaiChiII-PS2-02', 'TaiChiII-PS2-04'
]
export const jumpCueSeriesProduct: string[] = [
    'PWX-T1', 'PBH-T1', 'PBH-T2', 'PBH-H1'
]
export const mostPopularProduct: string[] = [
    
]
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

export const productDetailData: IProductData = {
    'PSX-01':  { name: '玉玺 Yuxi',
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
    'PSX-02':  { name: '天王 Tianwang',
                    price: 15888,
                    coverImgUrl: 'PSX-02-cover.jpg',
                    productImgUrls: ['PSX-02-1.jpg', 'PSX-02-2.jpg','PSX-02-3.jpg','PSX-02-4.jpg','PSX-02-5.jpg','PSX-02-6.jpg','PSX-02-7.jpg','PSX-02-8.jpg','PSX-02-9.jpg','PSX-02-10.jpg','PSX-02-11.jpg',],
                    itemCode:'PSX-02',
                    description: '天王级硬核品质，彰显您的王者身份<br/><br/>源于对设计苛刻追求，皮尔力始终坚持匠心手作，让生而不凡的“皮尔力·天王”于千篇一律中脱颖而出，才能符合您高人一等的眼光。奢雅而硬朗，慕然一瞥，已美至惊鸿。<br/><br/>每一支“皮尔力·天王”球杆需要两年的生产周期，从选料用材、雕刻镶嵌、打磨喷漆到配套包装，每一个步骤严格遵循A级标准。<br/><br/> 至臻A级黑檀木为主体的后把，采用进口CNC高精密雕刻技术，实现繁琐细致的雕刻镶嵌工艺。并且严格把控每一块嵌镶的重量，让多面嵌镶实现平衡统一，确保重量、重心不偏移。每一支球杆都必须一次成型，任何一处细微镶嵌出现0.06mm的偏差，一律淘汰。让您在享受奢华外观的同时，更能体验手臂延伸般的顺畅打感。<br/><br/> 考究的细节处理，备显尊崇，贵族气质的金属铜镶嵌，迅捷之速绽放眼前。金属铜与木制的衔接光滑紧实无毛刺，每一处铜片都要经过数小时的手工打磨抛光，达到机器无法实现的镜面金属光泽。<br/><br/> 握把采用市面上非常罕见的环雕工艺，每一根雕刻线条900°盘旋于握把之上，黑白明暗交错间演绎绚丽灵动，所触及之处细腻顺滑。<br/><br/> 内外兼修，性能致上，奢华球杆新定义<br/><br/>皮尔力·天王球杆实现重大的改变和突破，代表皮尔力高级别的金标“双K”，王者风范不言而喻。<br/><br/>配置金标的P8前支和P20前支，每一支球杆的密度、硬度等数十项参数逐一经过人工检测，真正做到优中择优，并且每一支前支与后把都再次经过人工匹配测试，前后的传动更均匀透彻，确保每一支球杆的性能发挥到极致。<br/><br/> 皮尔力匠心倾注、不断进化，针对本款球杆定制升级了后把传力加速系统，能更好的发挥木制的天然性能，实现重量平衡、动能平衡，性能优势更加凸显：打感通透，反应灵敏，杆法效果明显。<br/><br/> 以王者之名，于不经意间，让您尽显尊崇本色<br/><br/>“天王”对代勇来说意味着一种荣誉、一份执着，一种肯定，22年的职业生涯，突破一个又一个极限，才成就了今天的自己，纵行台球天地，无愧挚爱初心。<br/><br/>“中式天王”代勇将毕生所学倾注到这款球杆之中，把自己对台球的理解汇集到这支球杆的精髓中，同时也凝聚百位匠人的心血，铸就一支真正的中式球杆。<br/><br/>“冠军只有一个，人生却可以丰富多彩，这也许就是台球带给我宝贵的财富。用我有限的精力去做更多有意义的事情，让更多的人喜欢台球，享受台球。也希望这支球杆在每一位使用者手中仍然不断地被塑造，成为荣誉的武器，尊贵的象征，王者的代表。”<br/><br/>',
                    type: 'cue',
                    brand: 'Peri',
                    limited: 99,
                    inStock: 0,
    },
    'PWX-02':  { name: '黄金甲 HuangJinJia',
                    price: 15688,
                    coverImgUrl: 'PWX-02-cover.jpg',
                    productImgUrls: ['PWX-02-1.jpg', 'PWX-02-2.jpg','PWX-02-3.jpg','PWX-02-4.jpg','PWX-02-5.jpg','PWX-02-6.jpg','PWX-02-7.jpg','PWX-02-8.jpg','PWX-02-9.jpg',],
                    itemCode:'PWX-02',
                    description: 'Please find the description on the image for more information',
                    type: 'cue',
                    brand: 'Peri',
                    inStock: 0,
    },
    'PT-SK1':  { name: '金字塔 JinZiTa',
                    price: 8688,
                    coverImgUrl: 'PT-SK1-cover.jpg',
                    productImgUrls: ['PT-SK1-1.jpg', 'PT-SK1-2.jpg','PT-SK1-3.jpg','PT-SK1-4.jpg','PT-SK1-5.jpg','PT-SK1-6.jpg','PT-SK1-7.jpg',],
                    itemCode:'PT-SK1',
                    description: 'Please find the description on the image for more information',
                    type: 'cue',
                    brand: 'Peri',
                    inStock: 0,
    },
    'ELEGANCE-LV-04':  { name: '静远 ELEGANCE LV-04',
    price: 1588,
    coverImgUrl: 'ELEGANCE-LV-04-cover.jpg',
    productImgUrls: ['ELEGANCE-LV-04-1.jpg', 'ELEGANCE-LV-04-2.jpg','ELEGANCE-LV-04-3.jpg','ELEGANCE-LV-04-4.jpg','ELEGANCE-LV-04-5.jpg','ELEGANCE-LV-04-6.jpg','ELEGANCE-LV-04-7.jpg',],
    itemCode:'ELEGANCE-LV-04',
    description: 'Please find the description on the image for more information',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'ELEGANCE-LV-03':  { name: '静远 ELEGANCE LV-03',
    price: 1299,
    coverImgUrl: 'ELEGANCE-LV-03-cover.jpg',
    productImgUrls: ['ELEGANCE-LV-03-1.jpg', 'ELEGANCE-LV-03-2.jpg','ELEGANCE-LV-03-3.jpg','ELEGANCE-LV-03-4.jpg','ELEGANCE-LV-03-5.jpg','ELEGANCE-LV-03-6.jpg',],
    itemCode:'ELEGANCE-LV-03',
    description: 'Please find the description on the image for more information',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'ELEGANCE-LV-02':  { name: '静远 ELEGANCE LV-02',
    price: 1266,
    coverImgUrl: 'ELEGANCE-LV-02-cover.jpg',
    productImgUrls: ['ELEGANCE-LV-02-1.jpg', 'ELEGANCE-LV-02-2.jpg','ELEGANCE-LV-02-3.jpg','ELEGANCE-LV-02-4.jpg','ELEGANCE-LV-02-5.jpg','ELEGANCE-LV-02-6.jpg','ELEGANCE-LV-02-7.jpg',],
    itemCode:'ELEGANCE-LV-02',
    description: 'Please find the description on the image for more information',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'ELEGANCE-LV-01':  { name: '静远 ELEGANCE LV-01',
    price: 1266,
    coverImgUrl: 'ELEGANCE-LV-01-cover.jpg',
    productImgUrls: ['ELEGANCE-LV-01-1.jpg', 'ELEGANCE-LV-01-2.jpg','ELEGANCE-LV-01-3.jpg','ELEGANCE-LV-01-4.jpg','ELEGANCE-LV-01-5.jpg','ELEGANCE-LV-01-6.jpg','ELEGANCE-LV-01-7.jpg',],
    itemCode:'ELEGANCE-LV-01',
    description: 'Please find the description on the image for more information',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'ELEGANCE-VK-01':  { name: '静远 ELEGANCE VK-01',
    price: 849,
    coverImgUrl: 'ELEGANCE-VK-01-cover.jpg',
    productImgUrls: ['ELEGANCE-VK-01-1.jpg', 'ELEGANCE-VK-01-2.jpg','ELEGANCE-VK-01-3.jpg','ELEGANCE-VK-01-4.jpg','ELEGANCE-VK-01-5.jpg','ELEGANCE-VK-01-6.jpg','ELEGANCE-VK-01-7.jpg',],
    itemCode:'ELEGANCE-VK-01',
    description: 'Please find the description on the image for more information',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'ELEGANCE-VK-02':  { name: '静远 ELEGANCE VK-02',
    price: 849,
    coverImgUrl: 'ELEGANCE-VK-02-cover.jpg',
    productImgUrls: ['ELEGANCE-VK-02-1.jpg', 'ELEGANCE-VK-02-2.jpg','ELEGANCE-VK-02-3.jpg','ELEGANCE-VK-02-4.jpg','ELEGANCE-VK-02-5.jpg','ELEGANCE-VK-02-6.jpg','ELEGANCE-VK-02-7.jpg','ELEGANCE-VK-02-8.jpg',],
    itemCode:'ELEGANCE-VK-02',
    description: 'Please find the description on the image for more information',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'ELEGANCE-VK-03':  { name: '静远 ELEGANCE VK-03',
    price: 849,
    coverImgUrl: 'ELEGANCE-VK-03-cover.jpg',
    productImgUrls: ['ELEGANCE-VK-03-1.jpg', 'ELEGANCE-VK-03-2.jpg','ELEGANCE-VK-03-3.jpg','ELEGANCE-VK-03-4.jpg','ELEGANCE-VK-03-5.jpg','ELEGANCE-VK-03-6.jpg','ELEGANCE-VK-03-7.jpg','ELEGANCE-VK-03-8.jpg','ELEGANCE-VK-03-9.jpg',],
    itemCode:'ELEGANCE-VK-03',
    description: 'Please find the description on the image for more information',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'ELEGANCEIII-V30-04':  { name: '静远 ELEGANCEIII V30-04',
    price: 1188,
    coverImgUrl: 'ELEGANCEIII-V30-04-cover.jpg',
    productImgUrls: ['ELEGANCEIII-V30-04-1.jpg', 'ELEGANCEIII-V30-04-2.jpg','ELEGANCEIII-V30-04-3.jpg','ELEGANCEIII-V30-04-4.jpg',],
    itemCode:'ELEGANCEIII-V30-04',
    description: '皮尔力·静远V30，是皮尔力·静远V20的升级款。<br/><br/>素面球杆爱好者的福音来了！<br/><br/>当年“静远V20”凭借素面工艺与超强性价比，曾是三四千元中式球杆中一直处于供不应求的产品，它的停产让很多爱好者没有机会再得到自己梦寐以求的球杆，现在它的升级款来了！<br/><br/>素得更高端  配置更强大<br/><br/>产品亮点经典设计语言? V30继承了皮尔力·静远经典[素尔不凡]的设计风格，整体纯正雅致的素色，简约时尚，本次添加的雕刻的设计直接让这系列球杆奢华感再度提升！而两款皮把、两款光把的设计，让用户更有选择空间。<br/><br/>P20前支与Dymond wood木料前臂的碰撞 动能强 击打稳，静远一直是大众最喜欢的皮尔力球杆系列之一。这次为了提升静远V30的打感，皮尔力制杆师可以说将目前品牌前沿技术都凝用在这款球杆上了。它的配置远远超过了它的市场价。<br/><br/>配备 性能卓越的P20前支：硬度、弹性兼具，几乎无让点。木料优选，硬度有保证。整体特殊的形态使视觉瞄准，以及击打犀利度提高。12.5mm的杆头击打白球锁点精确。鹰眼皮头保证了击打瞬间杆头着力在母球上更具摩擦效果，鹰眼自带的弹适空间也让力反应更活，整体达到球杆击打接近理想状态。<br/><br/>在前臂的部分加入了Dymond wood木料：这种密度高、硬度强、质地轻盈而抗击打的木料，使用直接提高了球杆硬度，将原本球杆最薄弱的环节变成快车道，明显提高了传力效果，并在长久使用过程中具有显著抗弯性。<br/><br/>',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'ELEGANCEIII-V30-05':  { name: '静远 ELEGANCEIII V30-05',
    price: 1088,
    coverImgUrl: 'ELEGANCEIII-V30-05-cover.jpg',
    productImgUrls: ['ELEGANCEIII-V30-05-1.jpg', 'ELEGANCEIII-V30-05-2.jpg','ELEGANCEIII-V30-05-3.jpg','ELEGANCEIII-V30-05-4.jpg','ELEGANCEIII-V30-05-5.jpg','ELEGANCEIII-V30-05-6.jpg',],
    itemCode:'ELEGANCEIII-V30-05',
    description: 'Please find the description on the image for more information',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'ELEGANCEIII-V30-03':  { name: '静远 ELEGANCEIII V30-03',
    price: 1188,
    coverImgUrl: 'ELEGANCEIII-V30-03-cover.jpg',
    productImgUrls: ['ELEGANCEIII-V30-03-1.jpg', 'ELEGANCEIII-V30-03-2.jpg','ELEGANCEIII-V30-03-3.jpg','ELEGANCEIII-V30-03-4.jpg',],
    itemCode:'ELEGANCEIII-V30-03',
    description: '皮尔力·静远V30，是皮尔力·静远V20的升级款。<br/><br/>素面球杆爱好者的福音来了！<br/><br/>当年“静远V20”凭借素面工艺与超强性价比，曾是三四千元中式球杆中一直处于供不应求的产品，它的停产让很多爱好者没有机会再得到自己梦寐以求的球杆，现在它的升级款来了！<br/><br/>素得更高端  配置更强大<br/><br/>产品亮点经典设计语言? V30继承了皮尔力·静远经典[素尔不凡]的设计风格，整体纯正雅致的素色，简约时尚，本次添加的雕刻的设计直接让这系列球杆奢华感再度提升！而两款皮把、两款光把的设计，让用户更有选择空间。<br/><br/>P20前支与Dymond wood木料前臂的碰撞 动能强 击打稳，静远一直是大众最喜欢的皮尔力球杆系列之一。这次为了提升静远V30的打感，皮尔力制杆师可以说将目前品牌前沿技术都凝用在这款球杆上了。它的配置远远超过了它的市场价。<br/><br/>配备 性能卓越的P20前支：硬度、弹性兼具，几乎无让点。木料优选，硬度有保证。整体特殊的形态使视觉瞄准，以及击打犀利度提高。12.5mm的杆头击打白球锁点精确。鹰眼皮头保证了击打瞬间杆头着力在母球上更具摩擦效果，鹰眼自带的弹适空间也让力反应更活，整体达到球杆击打接近理想状态。<br/><br/>在前臂的部分加入了Dymond wood木料：这种密度高、硬度强、质地轻盈而抗击打的木料，使用直接提高了球杆硬度，将原本球杆最薄弱的环节变成快车道，明显提高了传力效果，并在长久使用过程中具有显著抗弯性。<br/><br/>',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'ELEGANCEIII-V30-01':  { name: '静远 ELEGANCEIII V30-01',
    price: 1168,
    coverImgUrl: 'ELEGANCEIII-V30-01-cover.jpg',
    productImgUrls: ['ELEGANCEIII-V30-01-1.jpg', 'ELEGANCEIII-V30-01-2.jpg','ELEGANCEIII-V30-01-3.jpg','ELEGANCEIII-V30-01-4.jpg',],
    itemCode:'ELEGANCEIII-V30-01',
    description: '皮尔力·静远V30，是皮尔力·静远V20的升级款。<br/><br/>素面球杆爱好者的福音来了！<br/><br/>当年“静远V20”凭借素面工艺与超强性价比，曾是三四千元中式球杆中一直处于供不应求的产品，它的停产让很多爱好者没有机会再得到自己梦寐以求的球杆，现在它的升级款来了！<br/><br/>素得更高端  配置更强大<br/><br/>产品亮点经典设计语言? V30继承了皮尔力·静远经典[素尔不凡]的设计风格，整体纯正雅致的素色，简约时尚，本次添加的雕刻的设计直接让这系列球杆奢华感再度提升！而两款皮把、两款光把的设计，让用户更有选择空间。<br/><br/>P20前支与Dymond wood木料前臂的碰撞 动能强 击打稳，静远一直是大众最喜欢的皮尔力球杆系列之一。这次为了提升静远V30的打感，皮尔力制杆师可以说将目前品牌前沿技术都凝用在这款球杆上了。它的配置远远超过了它的市场价。<br/><br/>配备 性能卓越的P20前支：硬度、弹性兼具，几乎无让点。木料优选，硬度有保证。整体特殊的形态使视觉瞄准，以及击打犀利度提高。12.5mm的杆头击打白球锁点精确。鹰眼皮头保证了击打瞬间杆头着力在母球上更具摩擦效果，鹰眼自带的弹适空间也让力反应更活，整体达到球杆击打接近理想状态。<br/><br/>在前臂的部分加入了Dymond wood木料：这种密度高、硬度强、质地轻盈而抗击打的木料，使用直接提高了球杆硬度，将原本球杆最薄弱的环节变成快车道，明显提高了传力效果，并在长久使用过程中具有显著抗弯性。<br/><br/>',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'TaiChiII-PS2-01':  { name: '太极二代 TaiChiII PS2-01',
    price: 2088,
    coverImgUrl: 'TaiChiII-PS2-01-cover.jpg',
    productImgUrls: ['TaiChiII-PS2-01-0.jpg','TaiChiII-PS2-01-1.jpg', 'TaiChiII-PS2-01-2.jpg','TaiChiII-PS2-01-3.jpg','TaiChiII-PS2-01-4.jpg','TaiChiII-PS2-01-5.jpg','TaiChiII-PS2-01-6.jpg','TaiChiII-PS2-01-7.jpg','TaiChiII-PS2-01-8.jpg',],
    itemCode:'TaiChiII-PS2-01',
    description: 'Please find the description on the image for more information',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'TaiChiII-PS2-04':  { name: '太极二代 TaiChiII PS2-04',
    price: 2188,
    coverImgUrl: 'TaiChiII-PS2-04-cover.jpg',
    productImgUrls: ['TaiChiII-PS2-04-1.jpg', 'TaiChiII-PS2-04-2.jpg','TaiChiII-PS2-04-3.jpg','TaiChiII-PS2-04-4.jpg','TaiChiII-PS2-04-5.jpg','TaiChiII-PS2-04-6.jpg','TaiChiII-PS2-04-7.jpg','TaiChiII-PS2-04-8.jpg','TaiChiII-PS2-04-9.jpg','TaiChiII-PS2-04-10.jpg',],
    itemCode:'TaiChiII-PS2-04',
    description: 'Please find the description on the image for more information',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'TaiChiII-PS2-02':  { name: '太极二代 TaiChiII PS2-02',
    price: 2288,
    coverImgUrl: 'TaiChiII-PS2-02-cover.jpg',
    productImgUrls: ['TaiChiII-PS2-02-1.jpg', 'TaiChiII-PS2-02-2.jpg','TaiChiII-PS2-02-3.jpg','TaiChiII-PS2-02-4.jpg','TaiChiII-PS2-02-5.jpg','TaiChiII-PS2-02-6.jpg',],
    itemCode:'TaiChiII-PS2-02',
    description: 'Please find the description on the image for more information',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'PWX-T1':  { name: '神盾 ShenDun',
    price: 888,
    coverImgUrl: 'PWX-T1-cover.jpg',
    productImgUrls: ['PWX-T1-1.jpg', 'PWX-T1-2.jpg','PWX-T1-3.jpg','PWX-T1-4.jpg','PWX-T1-5.jpg','PWX-T1-6.jpg','PWX-T1-7.jpg','PWX-T1-8.jpg',],
    itemCode:'PWX-T1',
    description: 'Please find the description on the image for more information',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'PBH-T1':  { name: '破甲 PoJia',
    price: 388,
    coverImgUrl: 'PBH-T1-cover.jpg',
    productImgUrls: ['PBH-T1-1.jpg', 'PBH-T1-2.jpg','PBH-T1-3.jpg','PBH-T1-4.jpg','PBH-T1-5.jpg','PBH-T1-6.jpg','PBH-T1-7.jpg',],
    itemCode:'PBH-T1',
    description: 'Please find the description on the image for more information',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'PBH-T2':  { name: '破甲 PoJia',
    price: 388,
    coverImgUrl: 'PBH-T2-cover.jpg',
    productImgUrls: ['PBH-T2-1.jpg', 'PBH-T2-2.jpg','PBH-T2-3.jpg','PBH-T2-4.jpg','PBH-T2-5.jpg','PBH-T2-6.jpg','PBH-T2-7.jpg',],
    itemCode:'PBH-T2',
    description: 'Please find the description on the image for more information',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'PBH-H1':  { name: '狼牙 LangYa',
    price: 288,
    coverImgUrl: 'PBH-H1-cover.jpg',
    productImgUrls: ['PBH-H1-1.jpg', 'PBH-H1-2.jpg','PBH-H1-3.jpg','PBH-H1-4.jpg','PBH-H1-5.jpg',],
    itemCode:'PBH-H1',
    description: 'Please find the description on the image for more information',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'INFINITYII-PX2-01':  { name: '无极二代 龙尾 PX2-01',
    price: 8688,
    coverImgUrl: 'INFINITYII-PX2-01-cover.jpg',
    productImgUrls: ['INFINITYII-PX2-01-1.jpg', 'INFINITYII-PX2-01-2.jpg','INFINITYII-PX2-01-3.jpg','INFINITYII-PX2-01-4.jpg','INFINITYII-PX2-01-5.jpg','INFINITYII-PX2-01-6.jpg','INFINITYII-PX2-01-7.jpg','INFINITYII-PX2-01-8.jpg','INFINITYII-PX2-01-9.jpg','INFINITYII-PX2-01-10.jpg','INFINITYII-PX2-01-11.jpg','INFINITYII-PX2-01-12.jpg',],
    itemCode:'INFINITYII-PX2-01',
    description: '代号 “龙尾·无极”<br/><br/>让华贵外观与精悍打感以更融合形式呈现，不取舍，不妥协。PX2-01“龙尾·无极”外观将竞技的锋芒线条与木料的古典完美用花纹雕饰合理配比，辅助外观与球杆内在结构平衡，“缺一不可、分毫必甄”，出色诠释出皮尔力美与实用“兼得”的哲学论。<br/><br/>PX2-01“龙尾·无极”，后把以黑檀为底木，承袭世界球杆工艺史经典“八插”工艺，折射人们灵魂深处对竞技原始的好胜欲与力量神往。镶嵌插角之上的龙鳞尾纹饰，进一步将球杆工艺显示，体现无极·二代“雕中雕、刻中刻”的极致工艺！滚动球杆，无论从哪个角度观赏，扑面而来都是“龙尾·无极”昂扬气势尽显至尊本色。<br/><br/>格轮的改变:完全使用太空铝与年久黑檀交互嵌饰，现代银与古典黑，色彩的反差与两种用材的昂贵，带领我们又一次细致领悟什么是匠心的魅力!<br/><br/>后小把突出显现了“无极”家族的基因。 白枫与黑檀乱中有序的纹饰，有一种道家无为而治的思想韵味。细品这“一卷”形意图，有人认为，这图就像树，表达皮尔力“还原木之本色”的产品理念，好木料缔就好球杆的宗旨深入人心；也有人觉得这图颇有生命气息，像极了手臂血脉，印证球杆是手臂延伸的说法。<br/><br/>PX2-01“龙尾·无极”，全新使用皮尔力与韩国科研院所最新合作研发的X3高科技十字纤维体。<br/><br/>最新升级的“十字纤维体”贯穿后把，使球杆传力更快、更透，轴心效应始终保持力通过中心轴传递，确保力的作用笔直、饱满、动力十足，带你体验轻松清台！<br/><br/>恒温恒湿室自然脱水时间更长的木料制成的前支，在形态上与以往有所微调，拥有更直接、迅速的传力反应，重量也有优化，匹配顶级皮尔力高端“夜煞”皮头，亚光进口先角，控制母球更细腻、助你打出更多华丽弧线！<br/><br/>“隼鹰”八级接牙，另外蜥蜴皮真皮握把与“龙鳞臂”相得益彰，吸汗、防滑。高贵艺术气质，搭载一点“野性”，表达PX2-01“龙尾·无极”的桀骜不驯。<br/><br/>',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'INFINITYII-PX2-02':  { name: '无极二代 PX2-02',
    price: 9288,
    coverImgUrl: 'INFINITYII-PX2-02-cover.jpg',
    productImgUrls: ['INFINITYII-PX2-02-1.jpg', 'INFINITYII-PX2-02-2.jpg','INFINITYII-PX2-02-3.png','INFINITYII-PX2-02-4.png','INFINITYII-PX2-02-5.png','INFINITYII-PX2-02-6.png','INFINITYII-PX2-02-7.png','INFINITYII-PX2-02-8.png',],
    itemCode:'INFINITYII-PX2-02',
    description: '二代无极塑造全新豪华球杆，再度诠释皮尔力美与实用兼得的产品理念<br/><br/>皮尔力制杆新技术打造，打感更佳<br/><br/>匹配价值$1250豪华配置 官配赠送<br/><br/>探享新豪华球杆 皮尔力·无极二代 <br/><br/>天生不凡 美轮美奂<br/><br/>在中国高端中式球杆中，皮尔力·无极被职业球员广泛推崇。这得益于无极球杆将打感、工艺做到了双卓越。时隔5年，皮尔力·无极二代震撼面世<br/><br/>PX2-02经典黑<br/><br/>号称最硬的木料的A级黑檀是这款杆的主料。坚硬、滑润，其木料切面打磨后形成的包浆亮丽非常，似铜镜可鉴;又恰似缎子的表面，体现皮尔力·无极家族雅致经典风格。结合后把内部皮尔力仿生学专利十字碳纤结构，硬、扎实，成就这款杆非同寻常的打感。<br/><br/>后把主体木料：A级黑檀<br/><br/>镶嵌：深海蓝鲍、钛空铝、德国进口骨纹板、蛇纹木<br/><br/>全新的时尚设计在球杆前臂处也有展示，八条向上飞射的“银箭”在灯光下看，耀眼夺目。<br/><br/>握把部分，象牙白德国进口骨纹板塑造出球杆优雅温润的细腻美感，加上黑檀镶嵌而成的线条，进一步从视觉上提升球杆奢华档次。<br/><br/>前支使用生长在北美阴冷高寒地区的硬枫木打造。双A级原木库存五年以上，进入生产车间后需历经7次抛圆，每一次抛圆之后，都要再经历一次恒温恒湿自然脱水，直至木料稳定。因此前支拥有卓越的抗弯性、抗击打性。<br/><br/>细节体现匠心<br/><br/>好马配好鞍,杆盒及所有配件 官方标配免费赠送,赠送价值达$1250 <br/><br/>',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'INFINITYII-PX2-02A':  { name: '无极二代皮把 PX2-02A',
    price: 7288,
    coverImgUrl: 'INFINITYII-PX2-02A-cover.jpg',
    productImgUrls: ['INFINITYII-PX2-02A-1.jpg', 'INFINITYII-PX2-02A-2.jpg','INFINITYII-PX2-02A-3.jpg','INFINITYII-PX2-02A-4.jpg','INFINITYII-PX2-02A-5.jpg','INFINITYII-PX2-02A-6.jpg','INFINITYII-PX2-02A-7.jpg','INFINITYII-PX2-02A-8.jpg','INFINITYII-PX2-02A-9.jpg','INFINITYII-PX2-02A-10.jpg',],
    itemCode:'INFINITYII-PX2-02A',
    description: '在高端中式台球杆中，皮尔力无极二代被职业球员广泛推崇，这得益于球杆将打感、工艺做到了双卓越！即便仅从第一印象评价，皮尔力·无极二代美轮美奂的外观与蓄势待发的气质也足以深入人心！<br/><br/>无极二代光把收获一大波好评反馈，当然也有人提出建议“如果能配个皮把就完美了”<br/><br/>球迷们有需求，我们来满足！皮尔力研发团队马上设计方案，经过几次测试完善后，皮尔力·无极二代皮把，应运而生！<br/><br/>这款球杆选用P20-K形态前支，采用经过5年恒温恒湿 自然脱水的高等级北美硬枫木精制而成，拥有卓越的抗弯性和抗击打性，弹硬兼具，锁点精确，让点小，易控母球。<br/><br/>后把极具美学魅力，所见之处均为纯手工镶嵌，雕刻镶嵌是“皮尔力”专属特色，深海蓝鲍、太空铝、德国进口骨纹板等构成的花纹装饰，八条向上飞射的“银箭”耀眼夺目。无不体现皮尔力每一支球杆坚持匠心打造，专注每一处细节。<br/><br/>精致的外观结合内部十字碳纤结构，保证了球杆后把劲力十足，硬中带弹，传力通透，打感非凡！<br/><br/>球杆的后把既保留了无极二代原有的优质性能和镶嵌工艺，又增加了蜥蜴皮真皮握把，皮把具有防滑、吸汗的特点，手感舒适，绝对是皮把爱好者、手心爱出汗的球迷朋友们的爆炸福音。<br/><br/>PX2-02A后把以A级黑檀为主料，坚硬、滑润；皮尔力·无极二代皮把，以全新姿态焕发新生，助力你探索台球世界。<br/><br/>后把主体木料：A级黑檀<br/><br/>',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'INFINITYII-PX2-03':  { name: '无极二代 PX2-03',
    price: 9288,
    coverImgUrl: 'INFINITYII-PX2-03-cover.jpg',
    productImgUrls: ['INFINITYII-PX2-03-1.jpg', 'INFINITYII-PX2-03-2.jpg','INFINITYII-PX2-03-3.png','INFINITYII-PX2-03-4.png','INFINITYII-PX2-03-5.png','INFINITYII-PX2-03-6.png','INFINITYII-PX2-03-7.png','INFINITYII-PX2-03-8.png',],
    itemCode:'INFINITYII-PX2-03',
    description: '二代无极塑造全新豪华球杆，再度诠释皮尔力美与实用兼得的产品理念<br/><br/>皮尔力制杆新技术打造，打感更佳<br/><br/>匹配价值$1250豪华配置 官配赠送<br/><br/>探享新豪华球杆 皮尔力·无极二代 <br/><br/>天生不凡 美轮美奂<br/><br/>在中国高端中式球杆中，皮尔力·无极被职业球员广泛推崇。这得益于无极球杆将打感、工艺做到了双卓越。时隔5年，皮尔力·无极二代震撼面世<br/><br/>PX2-03凤凰红<br/><br/>后把主体使用高档球杆的专属用料——A级COCOBOLO可可菠萝木，琥珀色的天然木质，打感扎实，而木本色抢人眼球。结合内部球杆内部皮尔力专利十字碳纤结构，保证了球杆后把劲力十足，硬中带弹，传力通透，打感非凡。<br/><br/>后把主体木料：A级可可菠萝<br/><br/>镶嵌：深海蓝鲍、钛空铝、德国进口骨纹板、郁金香木<br/><br/>缀于格轮处深海蓝鲍、钛空铝<br/><br/>郁金香木的集中嵌饰<br/><br/>好似多颗宝石镶嵌其中！<br/><br/>前支使用生长在北美阴冷高寒地区的硬枫木打造。双A级原木库存五年以上，进入生产车间后需历经7次抛圆，每一次抛圆之后，都要再经历一次恒温恒湿自然脱水，直至木料稳定。因此前支拥有卓越的抗弯性、抗击打性。<br/><br/>细节体现匠心<br/><br/>好马配好鞍,杆盒及所有配件 官方标配免费赠送,赠送价值达$1250 <br/><br/>',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'INFINITYII-PX2-03A':  { name: '无极二代皮把 PX2-03A',
    price: 7488,
    coverImgUrl: 'INFINITYII-PX2-03A-cover.jpg',
    productImgUrls: ['INFINITYII-PX2-03A-1.jpg', 'INFINITYII-PX2-03A-2.jpg','INFINITYII-PX2-03A-3.jpg','INFINITYII-PX2-03A-4.jpg','INFINITYII-PX2-03A-5.jpg','INFINITYII-PX2-03A-6.jpg','INFINITYII-PX2-03A-7.jpg','INFINITYII-PX2-03A-8.jpg','INFINITYII-PX2-03A-9.jpg','INFINITYII-PX2-03A-10.jpg','INFINITYII-PX2-03A-11.jpg',],
    itemCode:'INFINITYII-PX2-03A',
    description: '在高端中式台球杆中，皮尔力无极二代被职业球员广泛推崇，这得益于球杆将打感、工艺做到了双卓越！即便仅从第一印象评价，皮尔力·无极二代美轮美奂的外观与蓄势待发的气质也足以深入人心！<br/><br/>无极二代光把收获一大波好评反馈，当然也有人提出建议“如果能配个皮把就完美了”<br/><br/>球迷们有需求，我们来满足！皮尔力研发团队马上设计方案，经过几次测试完善后，皮尔力·无极二代皮把，应运而生！<br/><br/>这款球杆选用P20-K形态前支，采用经过5年恒温恒湿 自然脱水的高等级北美硬枫木精制而成，拥有卓越的抗弯性和抗击打性，弹硬兼具，锁点精确，让点小，易控母球。<br/><br/>后把极具美学魅力，所见之处均为纯手工镶嵌，雕刻镶嵌是“皮尔力”专属特色，深海蓝鲍、太空铝、德国进口骨纹板等构成的花纹装饰，八条向上飞射的“银箭”耀眼夺目。无不体现皮尔力每一支球杆坚持匠心打造，专注每一处细节。<br/><br/>精致的外观结合内部十字碳纤结构，保证了球杆后把劲力十足，硬中带弹，传力通透，打感非凡！<br/><br/>球杆的后把既保留了无极二代原有的优质性能和镶嵌工艺，又增加了蜥蜴皮真皮握把，皮把具有防滑、吸汗的特点，手感舒适，绝对是皮把爱好者、手心爱出汗的球迷朋友们的爆炸福音。<br/><br/>PX2-03A后把选用A级可可菠萝木为主料，琥珀色的天然木制，彰显高贵气质。皮尔力·无极二代皮把，以全新姿态焕发新生，助力你探索台球世界。<br/><br/>',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'INFINITY-PX-02':  { name: '无极 PX-02',
    price: 6888,
    coverImgUrl: 'INFINITY-PX-02-cover.jpg',
    productImgUrls: ['INFINITY-PX-02-1.jpg', 'INFINITY-PX-02-2.jpg','INFINITY-PX-02-3.jpg','INFINITY-PX-02-4.jpg','INFINITY-PX-02-5.jpg','INFINITY-PX-02-6.jpg','INFINITY-PX-02-7.jpg','INFINITY-PX-02-8.jpg','INFINITY-PX-02-9.jpg',],
    itemCode:'INFINITY-PX-02',
    description: 'Please find the description on the image for more information',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'INFINITY-PX-03':  { name: '无极 PX-03',
    price: 7188,
    coverImgUrl: 'INFINITY-PX-03-cover.jpg',
    productImgUrls: ['INFINITY-PX-03-1.jpg', 'INFINITY-PX-03-2.jpg','INFINITY-PX-03-3.jpg','INFINITY-PX-03-4.jpg','INFINITY-PX-03-5.jpg','INFINITY-PX-03-6.jpg','INFINITY-PX-03-7.jpg','INFINITY-PX-03-8.jpg','INFINITY-PX-03-9.jpg',],
    itemCode:'INFINITY-PX-03',
    description: 'Please find the description on the image for more information',
    type: 'cue',
    brand: 'Peri',
    inStock: 0,
    },
    'ACCS-PERI-CHALKPRO':  { name: '皮尔力墨玉枪粉 PERI CHALKPRO',
    price: 105,
    coverImgUrl: 'ACCS-PERI-CHALKPRO-cover.jpg',
    productImgUrls: ['ACCS-PERI-CHALKPRO-1.jpg', 'ACCS-PERI-CHALKPRO-2.jpg','ACCS-PERI-CHALKPRO-3.jpg','ACCS-PERI-CHALKPRO-4.jpg','ACCS-PERI-CHALKPRO-5.jpg','ACCS-PERI-CHALKPRO-6.jpg','ACCS-PERI-CHALKPRO-7.jpg','ACCS-PERI-CHALKPRO-8.jpg','ACCS-PERI-CHALKPRO-9.jpg','ACCS-PERI-CHALKPRO-10.jpg','ACCS-PERI-CHALKPRO-11.jpg',],
    itemCode:'ACCS-PERI-CHALKPRO',
    description: '1盒3颗<br/><br/>细腻如丝，加塞防滑<br/><br/>从质地到打感<br/><br/>皮尔力·墨玉巧克粉<br/><br/>品质全面升级以迎接全新挑战<br/><br/>对于一个球手来说，巧克粉的作用，至关重要！<br/><br/>而足够细腻的粉质，是巧克粉的灵魂。粉够细，才能实现上粉均匀、附着力强、粘性足。我们比较熟悉的面粉约90目（目为计量单位），彩妆粉底约200目，皮尔力·墨玉巧克粉，粉质目数为7000目！粉轻如空气，不掉粉，不脏台尼，加塞效果出众，让你轻松解锁操控乐趣。<br/><br/>球场上滑杆，满手的粉末，不停的上巧粉，是影响球员状态的罪魁祸首 ！<br/><br/>墨玉巧克粉的超强附着力，持球时间长，使皮头摩擦力增大，旋转效果非常好，成就你优越的击球体验。<br/><br/>绅士黑色外包装，干净卫生不脏手<br/><br/>易拉撕条，巧克粉得到充分使用，不浪费<br/><br/>高品质的巧克粉非常适合职业球员或台球发烧友<br/><br/>',
    type: 'accessory',
    brand: 'Peri',
    inStock: 0,
    },
    'ACCS-PERI-CHALK':  { name: '皮尔力枪粉 PERI CHALK',
    price: 36,
    coverImgUrl: 'ACCS-PERI-CHALK-cover.jpg',
    productImgUrls: ['ACCS-PERI-CHALK-1.jpg', 'ACCS-PERI-CHALK-2.jpg','ACCS-PERI-CHALK-3.jpg',],
    itemCode:'ACCS-PERI-CHALK',
    description: '1盒2颗<br/><br/>Please find the description on the image for more information',
    type: 'accessory',
    brand: 'Peri',
    inStock: 0,
    },
    'ACCS-PERI-GLOVE01':  { name: '皮尔力台球专用手套2019（黑色）PERI GLOVE (BLACK)',
    price: 28,
    coverImgUrl: 'ACCS-PERI-GLOVE01-cover.jpg',
    productImgUrls: ['ACCS-PERI-GLOVE01-1.jpg', 'ACCS-PERI-GLOVE01-2.jpg','ACCS-PERI-GLOVE01-3.jpg','ACCS-PERI-GLOVE01-4.jpg','ACCS-PERI-GLOVE01-5.jpg','ACCS-PERI-GLOVE01-6.jpg','ACCS-PERI-GLOVE01-7.jpg','ACCS-PERI-GLOVE01-8.jpg',],
    itemCode:'ACCS-PERI-GLOVE01',
    description: '解决涩手、粘肉、出杆不顺...等多个因为手汗大造成球员击球失误的问题！<br/><br/>皮尔力出品的专业级台球手套：采用韩国进口面料，弹力丝滑，永不变形。3D剪裁，男女均适用。<br/><br/>面料|新黑色款继续采用韩国进口LYCRA莱卡制作，且选了纤维更轻柔等级的面料，更丝滑、亲肤。伸、握自如，出杆顺畅。双车线做工，工艺精美。<br/><br/>市场上的台球手套大多采用混合棉纱性纤维，那些布料制作的手套就像丝袜，很容易出现脱线、滑丝、发皱等现象。<br/><br/>皮尔力使用面料“贵族”莱卡制作的手套，弹性足，吸汗，不生静电不发皱，长期使用也不会变形。<br/><br/>功能升级|为保证良好的透气性，手套的掌心部分继续采用蝶形蛛网面，保持手套运动过程中的呼吸感。而为了加强手架掌心自然状态下轻松“抓住”台尼的感觉，升级版皮尔力手套在侧掌位置使用了磨砂皮防滑垫。百分百贴合手掌与台面的情况下，防滑垫轻松辅力手心“抓住”台尼，稳定出杆，并具备耐磨特点！<br/><br/>穿戴设计帅气|这款手套穿戴简捷、外观十分帅气、有型。手腕处更有磨砂皮质感的魔术贴，与整体的经典的黑色搭配，追求一种军工用品既视感。显而易见黑色也有显瘦效果，更衬托持杆者手架姿势沉稳、帅气。<br/><br/>左右手兼具  全新震撼上市！<br/><br/>',
    type: 'accessory',
    brand: 'Peri',
    inStock: 0,
    },
    'ACCS-PERI-GLOVE02':  { name: '皮尔力台球专用手套2022（蓝色）PERI GLOVE (BLUE)',
    price: 50,
    coverImgUrl: 'ACCS-PERI-GLOVE02-cover.jpg',
    productImgUrls: ['ACCS-PERI-GLOVE02-1.jpg', 'ACCS-PERI-GLOVE02-2.jpg','ACCS-PERI-GLOVE02-3.jpg','ACCS-PERI-GLOVE02-4.jpg','ACCS-PERI-GLOVE02-5.jpg',],
    itemCode:'ACCS-PERI-GLOVE02',
    description: 'Please find the description on the image for more information',
    type: 'accessory',
    brand: 'Peri',
    inStock: 0,
    },
    'ACCS-PERI-TOWEL':  { name: '皮尔力毛巾 PERI TOWEL',
    price: 19,
    coverImgUrl: 'ACCS-PERI-GLOVE02-cover.jpg',
    productImgUrls: ['ACCS-PERI-TOWEL-1.jpg', 'ACCS-PERI-TOWEL-2.jpg','ACCS-PERI-TOWEL-3.jpg','ACCS-PERI-TOWEL-4.jpg','ACCS-PERI-TOWEL-5.jpg',],
    itemCode:'ACCS-PERI-TOWEL',
    description: 'Please find the description on the image for more information',
    type: 'accessory',
    brand: 'Peri',
    inStock: 0,
    },
    'ACCS-PERI-EXTENSION':  { name: '皮尔力加长把 PERI EXTENSION',
    price: 33,
    coverImgUrl: 'ACCS-PERI-EXTENSION-cover.jpg',
    productImgUrls: ['ACCS-PERI-EXTENSION-1.jpg', 'ACCS-PERI-EXTENSION-2.jpg','ACCS-PERI-EXTENSION-3.jpg','ACCS-PERI-EXTENSION-4.jpg','ACCS-PERI-EXTENSION-5.jpg','ACCS-PERI-EXTENSION-6.jpg','ACCS-PERI-EXTENSION-7.jpg','ACCS-PERI-EXTENSION-8.jpg','ACCS-PERI-EXTENSION-9.jpg','ACCS-PERI-EXTENSION-10.jpg','ACCS-PERI-EXTENSION-11.jpg','ACCS-PERI-EXTENSION-12.jpg',],
    itemCode:'ACCS-PERI-EXTENSION',
    description: 'ACCS-PERI-EXTENSION 二代加长把全面升级，碳纤加长把<br/><br/>EXTENSIONII 二代碳纤加长把 100mm $33 <br/><br/>EXTENSIONII 二代碳纤加长把 200mm $40<br/><br/>EXTENSION 一代碳纤加长把 $33<br/><br/>',
    type: 'accessory',
    brand: 'Peri',
    inStock: 0,
    },
}


export function getProductDataByProductCodes(itemCodes: string[]): IProduct[]{
    let tempArr: IProduct[] = [];
    itemCodes.forEach((itemCode)=>tempArr.push(productDetailData[itemCode]));
    return tempArr;
}
