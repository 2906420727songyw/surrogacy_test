export default {
    test:'测试',
    language:'EN',
    header:{
        title: "小树苗代孕中心",
        options:[{
            text: '成为准父母',
            link: '/pages/ParentsSection',
            options: [{
                text: '代孕妈妈的匹配过程',
                link: 'surrogacy-matching-process'
            }, {
                text: '单身父母和 LGBTQIA+ 群体',
                link: 'egg-sperm-donation-help'
            }, {
                text: '代孕计划和流程',
                link: 'surrogacy-plan-process'
            }, {
                text: '代孕套餐和费用',
                link: '/pages/surrogacy-cost'
            }]
        }, {
            text: '成为代孕妈妈',
            link: '/pages/BecomeSurrogate',
            options: [{
                text: '谁可以成为代孕妈妈',
                link: 'who-can-be-surrogate'
            }, {
                text: '怎么筛选申请者',
                link: 'become-surrogate-part2-content'
            }, {
                text: '如何成为代孕妈妈',
                link: 'become-surrogate-part3-content'
            }, {
                text: '为什么选择我们',
                link: 'become-surrogate-part4-1'
            }, {
                text: '薪酬和补偿',
                link: 'become-surrogate-part4-2'
            }]
        }, {
            text: '关于我们',
            link: '/pages/about',
        }, {
            text: '资讯',
            link: '/pages/resources',
        }, {
            text: '职业生涯',
            link: '/pages/careers',
        }],
        login:'登录',
        search:'搜索',
        appointment:'预约',
        login_option:[{
            text:'成为准父母',
            link:'parent'
        },{
            text:'成为代孕妈妈',
            link:'surrogacy'
        }]
    },
    footer:[{
        text:'如何成为准父母',
        link:'/pages/ParentsSection',
        options:[
            {
                text:'代孕妈妈匹配过程',
                link:'surrogacy-matching-process'
            },
            {
                text:'单身父母和 LGBTQIA+ 群体',
                link:'egg-sperm-donation-help'
            },
            {
                text:'代孕计划和流程',
                link:'surrogacy-plan-process'
            },
            {
                text:'代孕套餐和费用',
                link:'/pages/BecomeSurrogate'
            }
        ]
    },{
        text:'如何成为代孕妈妈',
        link:'/pages/BecomeSurrogate',
        options:[
            {
                text:'谁可以成为代孕妈妈',
                link:'who-can-be-surrogate'
            },
            {
                text:'怎么筛选申请者',
                link:'become-surrogate-part2'
            },{
                text:'如何成为代孕妈妈',
                link:'become-surrogate-part3'
            },{
                text:'为什么选择我们',
                link:'become-surrogate-part4-1'
            },{
                text:'薪酬和补偿',
                link:'become-surrogate-part4-2'
            }
        ]   
    },
    {
        text: '关于我们',
        link: '/pages/about',
    },
    {
        text: '资讯',
        link: '/pages/resources',
    },
    {
        text: '职业生涯',
        link: '/pages/careers',
    },
    ],
    footer_other:{
        title:'探索',
        span:['登录：成为准父母','登录：成为代孕妈妈']
    },
    about_us:[
        {
            name:'Judith Hoechst',    
            role:'律师团队',
            content:['作为生殖法律专家，曾任美国生殖医学学会（ASRM）法律专业组主席，起草多项立法，致力于法律保护与专业教育。']
          },
        
        {
            name:'Diana E. Chavkin, MD, FACOG',    
            role:'医生团队',
            content:['Dr. Diana Chavkin 是双重认证的生殖内分泌与不孕症专家，现任医疗总监，荣获多项顶级医生奖，专注个性化生育治疗。']
        },
        
        
        {
          name:'Kayla Luo',    
          role:'联合创始人',
          content:['Sapling Surrogacy 联合创始人兼案例经理，拥有康奈尔与哥大学位，精通三语，专注全球化运营与生殖医疗创新']
        }, {
          name:'XXX',    
          role:'XXX',
          content:['xxx']
        },
        {
          name:'XXX',    
          role:'XXX',
          content:['xxx']
        }
      ],
      about_us_title:{
        title1:'小树苗代孕中心',
        title2:'关于我们',
        desc:'行业领先的全方位服务代孕机构，<br>以卓越的成功率和贴心的专业支持，致力于为每一位客户打造安心、温暖的家庭梦想之旅',
        more:'了解更多'
      },
      home:{
        BecomingParents:{
            title:'成为准父母',
            desc:'套餐价格低至 145,000 美元',
            button:[{
                text:'了解更多',
                link:['/pages/ParentsSection'],
                auth:false
            },{
                text:'代孕费用',
                link:['/pages/ParentsSection'],
                auth:false
            },{
                text:'申请通道',
                link:['/pages/auth/profile?type=parent','/pages/auth/login?mode=register'],
                auth:true
            }]
        },
        BecomingSurrogate:{
            title:'成为代孕妈妈',
            desc:'成为代孕妈妈，最高可获报酬 105,000+ 美元',
            button:[{
                text:'了解更多',
                link:['/pages/BecomeSurrogate'],
                auth:false
            },{
                text:'申请通道',
                link:['/pages/auth/profile?type=appointment','/pages/auth/login?mode=registerMother'],
                auth:true
            }]
        },
        saplingSurrogacy:{
            title:'欢迎单身父母和 LGBTQIA+ 群体',
            button:[{
                text:'了解更多',
                link:['/pages/ParentsSection'],
                auth:false
            },{
                text:'申请通道',
                link:['/pages/auth/profile?type=appointment','/pages/auth/login?mode=registerMother'],
                auth:true
            }]
        },
        DataDisplay:{
            title:'小树苗代孕中心',
            desc:'专业铸就成功，热情赢得信赖。<br>作为一家全方位服务的代孕机构，小树苗专注于为准父母和代孕者提供专业支持与丰富经验。凭<br>借20年来助力多元家庭成长的热忱，我们陪伴您实现家庭梦想的每一步。',
            data:[{
                number:'56',
                desc:'我们的客户遍布全球56个国家'
            },{
                number:'100+',
                desc:'我们每年帮助超过100个家庭实现梦想'
            },{
                number:'67+',
                desc:'我们与全美超过67家试管医院建立了合作关系'
            },{
                number:'99.3%',
                desc:'我们有行业领先的99.3%一次成功率，为您提供更高保障'
            }]
        },
        Foundation:{
            title:'用爱筑梦：基金会帮助更多不孕家庭拥有孩子',
            button:[{
                text:'了解更多',
                link:[''],
                auth:false
            },{
                text:'加入我们',
                link:[''],
                auth:true
            }]
        }
    },

    parentsSection:{
        parentsSectionPart1:{
            title:'小树苗代孕中心',
            desc_list:[
                "欢迎来到小树苗代孕中心",
                "协助您实现幸福美满的家庭梦想是我们最大的心愿。",
                "代孕是一段漫长、充满挑战但无比伟大的旅程。",
                "若您在过程中感到迷茫或无助，请放心，",
                "小树苗将始终陪伴在您身边，耐心解答您的疑问并提供全面支持。",
                "我们坚信，每一份付出都值得。",
                "有小树苗的陪伴，您的代孕之旅将更加安心、顺畅且充满喜悦。"
            ],
            btn:'开始咨询',
            changeReason:"为什么准父母会选择小树苗代孕中心",
            reason:'选择一家专业的代孕机构至关重要，它将引导并陪伴您顺利、轻松地完成成为准父母的整个旅程。选择小树苗代孕中心，您将享受全方位的代孕服务。我们拥有：',
            listData: [
                {
                  image: '/images/ParentsSection/icon1.png',
                  text: '最有经验的团队：团队成员拥有多年行业经验，80%亲历代孕旅程。',
                },
                {
                  image: '/images/ParentsSection/icon2.png',
                  text: '最专业的法律团队：完善的法律支持，全方位保障您的合法权益。',
                },
                {
                  image: '/images/ParentsSection/icon3.png',
                  text: '最合适的医疗选择：根据您的情况量身定制治疗方案，提升成功率。',
                },
                {
                  image: '/images/ParentsSection/icon4.png',
                  text: '最严格的筛选机制：甄选最优质的代孕母亲和最适合您的医生。',
                },
                {
                  image: '/images/ParentsSection/icon1.png',
                  text: '最大的资金信托公司：资金托管安全透明，所有使用清晰可查。',
                },
                {
                  image: '/images/ParentsSection/icon2.png',
                  text: '最完善的定制化套餐：根据需求灵活定制，满足您的所有服务要求。',
                },
                {
                  image: '/images/ParentsSection/icon3.png',
                  text: '最高效的交流：一站式服务，随时为您提供快速响应和支持。',
                },
                {
                  image: '/images/ParentsSection/icon4.png',
                  text: '最能理解客户的团队：80%的团队成员有亲身代孕经验，深刻理解您的感受。',
                },
                {
                  image: '/images/ParentsSection/icon1.png',
                  text: '最快速的匹配流程：匹配流程比普通机构快40%，让您更快开始代孕旅程。',
                },
                {
                  image: '/images/ParentsSection/icon2.png',
                  text: '最透明的价格：所有费用透明公开，无任何隐藏收费。',
                },
              ]
        },
        ParentsSectionPart2:{
            title:'准父母和代孕妈妈的匹配过程',
            step:[
                {
                    title:'第一步：',
                    desc:'筛选申请者（ 2% 的申请者才能进入 Sapling 的代孕母库）'
                },
                {
                    title:'第二步：',
                    desc:'选定的代孕妈妈是否合适（90%以上可以通过二次审核）'
                }
            ],
            firstStep:[
                {
                    title:'1. 申请',
                    text:'每位代孕妈妈必须填写一份详细的申请表，了解她的必要基本信息',
                    desc:'每位代孕妈妈都必须完成我们的申请表，一共有五个大类，涵盖了生育历史、家族病史、家庭生活、学历、<br>财政情况和工作情况以及代孕动机。根据美国代孕法案规定，代孕妈妈必须在 21-45 岁之间，生产并养育过至少一个孩子，<br>身体健康，无重大疾病，无药物滥用或烟酒问题，健康指数（BMI）在 30 以下。'
                },
                {
                    title:'2. 初步检查',
                    text:'第三方机构协助调查申请者及其伴侣，保证其生理和心理同时符合标准',
                    desc:'在申请表审核通过之后，我们将会有专业的人员进行对接，有助于我们深入了解她们的代孕申请，并评估候选人完成代孕过程的能力。<br>同时，我们聘请了专业的第三方机构进行协助，他们会对申请者及其伴侣进行背景调查（包括家庭情况、收入情况、居住情况、犯罪历史背景等），<br>合作的第三方医院对其进行前期的身体检查（包括子宫情况、怀孕历史、吸烟酗酒毒品史等），<br>以及专业的心理医生进行心理评估，保证他们在身体和心理上同时适合做代孕妈妈。'
                },
                {
                    title:'3. 科普教育',
                    text:'通过教育和沟通保证代孕妈妈对这方面准备',
                    desc:'在背景审核和身体健康检查都通过后，我们将会有专业的工作人员和代孕妈妈对接，进行定期的科普教育，<br>让他们更了解代孕的所有过程。同时，紧密的联系也能让我们随时掌握代孕妈妈候选人的生活状态和健康状态，<br>保证她们健康的身体和心理状态。'
                }
            ],
            secondStep:[
                {
                    title:'1. 二次身体检查',
                    desc:'在准父母从我们的代母库里选定好代孕妈妈后，我们将对其进行第二次的身体检查和心理筛查，<br>以确保其现在依旧具备成为代孕妈妈的资格。'
                },
                {
                    title:'2. 医院体检',
                    desc:'试管医院将会按照代孕妈妈的月经周期，在她月经前后几天安排体检，<br>体检结果大概需要三周时间，其目的是为了检查子宫情况，以确定其移植和备孕状态。'
                }
            ],
            button:{
                text:'开始咨询'
            }
        },
        ParentsSectionPart3:{
            title:'准父母代孕流程',
            context:[
                '代孕是一段充满重要节点和步骤的旅程，',
                '每对准父母都会根据自身的情况、需求和偏好，形成独特的时间线和体验。',
                '通常情况下，经过 12-24 个月的时间，您就能迎接宝宝回家。',
                '在此期间，小树苗专业团队将全程为您提供一对一陪伴与支持，确保您的代孕之旅顺利无忧。',
                '为了帮助您更清晰地了解代孕流程、各阶段的目标及预期结果，',
                '以及大致的时间安排，我们将代孕旅程划分为五个主要阶段，供您参考。'
            ],
            step:[
                {
                    title:'第一步',
                    desc:'咨询与签约（0-1个月）',
                    context:[
                        '您可以通过网站预约、联系我们的客服或使用在线对话功能选择适合的咨询时间。',
                        '在首次咨询中，您将了解更多关于我们的信息，',
                        '我们也会根据您的具体情况、需求和期望，为您提供个性化的解决方案。',
                        '一旦您选择小树苗代孕中心并签约，我们的专业团队将与您对接，全面规划您的代孕旅程，',
                        '包括匹配代孕妈妈、协助选择试管医院，以及通过合作的卵子库和精子库满足您的额外需求。',
                    ]
                },
                {
                    title:'第二步',
                    desc:'代孕妈妈的双向匹配（时间因人而异）',
                    context:[
                        '所有代孕妈妈都经过严格筛选，我们会根据您的需求和偏好为您推荐多位候选人，',
                        '让您从我们的代孕母库中选择最适合的一位。',
                        '一旦匹配成功，小树苗代孕中心将为您和代孕妈妈详细解读接下来的流程，',
                        '包括每个关键时间节点的安排，以及涉及的法律事务、医疗计划、资金信托管理和保险服务，',
                        '确保整个代孕旅程清晰透明且顺利推进。']
                },
                {
                    title:'第三步',
                    desc:'试管医院与法律文件（3-4个月）',
                    context:[
                        '如果您没有冷冻胚胎或未选择试管医院，',
                        '我们会根据您的地理位置和需求推荐合作医院并安排医生面诊。',
                        '确认后，我们将规划胚胎培育计划，包括时间表、费用和用药方案，并合理安排您的行程。',
                        '胚胎筛选成功后，代孕妈妈需通过身体检查（子宫内膜和激素水平检测），',
                        '随后进入法律程序。律师将协助双方签署并公证合同。',
                        '完成后，试管医院将安排代孕妈妈进行胚胎移植的准备，并在约七周药物准备后完成胚胎移植。', 
                    ]
                },
                {
                    title:'第四步',
                    desc:'代孕妈妈怀孕（8-9个月）',
                    context:[
                        '从胚胎移植到第12周，代孕妈妈会定期接受HCG血液检查和超声波检查，',
                        '确保胚胎健康发育，第5-7周即可检测到胎心和胎囊位置。',
                        '一切顺利后，她将转到居住地的妇产科医生处进行常规产检，',
                        '第12周起每4周一次，第28周起每2周一次，第36周起每周一次，直至分娩。',
                        '在此期间，您可以随时与代孕妈妈保持联系，我们也会定期向您汇报代孕进展。',
                        '同时，我们将协助您完成亲权文件和分娩计划的准备工作：',
                        '亲权文件在怀孕第18周由律师起草，确保您的合法父母身份；',
                        '分娩计划则在孕后期与代孕妈妈共同商定，确保分娩当天的安排万无一失。',
                    ]
                },
                {
                    title:'第五步',
                    desc:'迎接宝宝的出生',
                    context:[
                        '当医生确认宝宝可以出院时，您将迎来与宝宝团聚的幸福时刻。',
                        '美国本地的父母通常可在宝宝出院后的几天内回家，',
                        '而海外父母需在美国停留约4周，以完成护照等必要手续。',
                        '小树苗代孕中心将全程陪伴并协助您处理所有流程，',
                        '确保您顺利抱着宝宝回家，开启美满的新生活。',
                    ]
                }
            ],

            buttonText:'开始咨询'

        },
        parentsSectionPart4:{
            title_first:'单身父母和 LGBTQIA+ 群体',
            title_second:'卵子和精子捐赠者的帮助',
            text_list:['如果您是单身父母、同性伴侣，或因身体原因无法使用自己的卵子或精子，选择一位优秀的卵子',
                '或精子捐赠者将帮助您实现拥有家庭的梦想。我们的卵子和精子捐赠者都经过严格筛选。他们参',
                '与捐赠不仅仅是为了报酬，更是为了通过自己的努力帮助他人实现家庭梦想。我们与全美知名的',
                '卵子和精子库合作，致力于为您提供更多高质量的选择。'
            ],
            desc:'套餐价格低至 145,000 美元',
            process:"选择卵子/精子捐赠者与卵子精子库的流程",
            part1:{
                title:'如果您选定某个卵子/精子捐赠者，您需要：',
                first_need:"1.挑选捐赠者签约后，您可以根据理想的特征（如头发颜色、眼睛颜色、身高、种族背景、地域等）进行筛选，我们的团队将协助您找到符合您需求的捐赠者。选定后，您可以查看捐赠者的详细信息，包括基本资料、教育背景、健康状况、生育历史、家庭情况以及家族遗传史。此外，您还可以浏览他们的照片和视频，并预约线上见面，直观了解捐赠者。",
                second_need:"2.开始捐赠流程确定捐赠者后，捐赠者将前往您选择的试管医院接受医学筛查，并根据要求进行药物治疗，准备取卵/精。随后，新鲜的卵子或精子将供您使用，开启您的家庭之旅。",
            },
            part2:{
                title:'如果您选择某个卵子/精子库，您需要：',
                first_need:"1.选择捐赠者注册成功后，我们合作的卵子/精子库工作人员将加入协助，为您提供捐赠者名单，帮助您筛选并确定心仪的捐赠者。",
                second_need:"2.	开始捐赠流程确认捐赠者后，我们与卵子/精子库的工作人员将协助您从库中购买冷冻卵子或精子，并启动胚胎培育过程，为您的家庭梦想迈出关键一步。",
            },
            btn:'开始咨询'
        }
    },
    surrogacyCost:{
        title:'Sapling 提供的套餐',
        desc:'Sapling提供两种套餐来满足您的需求,您可以根据您的个人情况进行选择。<br/>无论如何，我们都希望能够给您提供最舒心的服务，全程陪伴您走过这段特别的旅程。',
        sproutPackage:{
            title:'萌芽套餐',
            desc:'145,000 美元至 210,000 美元',
            list:[
                {
                    title:'中介服务费用：',
                    desc:'Sapling专注于匹配代孕妈妈、协调各方并全程管理代孕流程。服务内容包括代孕妈妈的筛选、心理评估和背景调查，同时在代孕周期内提供全面支持和沟通服务，确保每个代孕项目的顺利开展和执行。'
                },
                {
                    title:'医疗费用：',
                    desc:'Sapling与全美各大地区 CDC 认证的试管医院合作，这些医院拥有顶尖的医生和先进的实验室。我们可以为客户推荐多家优质医院供选择，以满足不同需求。医疗支出涵盖体外受精（IVF）程序、代孕妈妈的健康检查、怀孕期间的产检、分娩和住院费用，以及药物和激素治疗费用，确保代孕过程在专业医疗支持下安全进行。'
                },
                {
                    title:'法律费用：',
                    desc:'为确保各方权利和义务明确，我们将由美国代孕协会副会长及其专业律师团队提供代孕合同的起草、审查和执行服务。同时，我们也全程负责代孕过程中亲权确认和出生证更改等法律程序，确保法律保障。'
                },
                {
                    title:'信托账户管理费用：',
                    desc:'我们与全美最大的信托机构合作，为每位客户设立和管理专属信托账户，用于支付代孕过程中涉及的所有费用。信托管理费用涵盖账户设立、维护及定期账务报告，确保资金流动透明、安全，并严格遵循合同约定。'
                },
                {
                    title:'代孕妈妈补偿：',
                    desc:'Sapling的代孕妈妈多为军嫂或教堂成员，我们将为她们提供全面的补偿，包括因代孕承担时间、精力和健康风险的基本补偿，以及怀孕期间的生活津贴（如交通、营养和孕装费用）。此外，在特殊情况下，她们还可获得额外补偿，例如双胎补偿或剖宫产费用，以充分保障她们的权益与付出。'
                }
            ]
        },
        thrivePackage:{
            title:'茁壮套餐',
            desc:'260,000 美元至 295,000 美元',
            list:[
                {
                    title:'中介服务费用：',
                    desc:'Sapling专注于匹配代孕妈妈、协调各方并全程管理代孕流程。服务内容包括代孕妈妈的筛选、心理评估和背景调查，同时在代孕周期内提供全面支持和沟通服务，确保每个代孕项目的顺利开展和执行。'
                },
                {
                    title:'医疗费用：',
                    desc:'Sapling与全美各大地区 CDC 认证的试管医院合作，这些医院拥有顶尖的医生和先进的实验室。我们可以为客户推荐多家优质医院供选择，以满足不同需求。医疗支出涵盖体外受精（IVF）程序、代孕妈妈的健康检查、怀孕期间的产检、分娩和住院费用，以及药物和激素治疗费用，确保代孕过程在专业医疗支持下安全进行。'
                },
                {
                    title:'法律费用：',
                    desc:'为确保各方权利和义务明确，我们将由美国代孕协会副会长及其专业律师团队提供代孕合同的起草、审查和执行服务。同时，我们也全程负责代孕过程中亲权确认和出生证更改等法律程序，确保法律保障。'
                },
                {
                    title:'信托账户管理费用：',
                    desc:'我们与全美最大的信托机构合作，为每位客户设立和管理专属信托账户，用于支付代孕过程中涉及的所有费用。信托管理费用涵盖账户设立、维护及定期账务报告，确保资金流动透明、安全，并严格遵循合同约定。'
                },
                {
                    title:'代孕妈妈补偿：',
                    desc:'Sapling的代孕妈妈多为军嫂或教堂成员，我们将为她们提供全面的补偿，包括因代孕承担时间、精力和健康风险的基本补偿，以及怀孕期间的生活津贴（如交通、营养和孕装费用）。此外，在特殊情况下，她们还可获得额外补偿，例如双胎补偿或剖宫产费用，以充分保障她们的权益与付出。'
                },
                {
                    title:'旅行安排：',
                    desc:'Sapling为客户提供全面的旅行安排服务，确保整个代孕过程的出行更加便捷和无忧。我们可以协助客户预订前往试管医院或代孕相关机构的交通和住宿，规划行程，并根据需求安排机场接送、车辆租赁等服务，无论是定期检查还是迎接新生命，都能享受无缝衔接的出行体验。'
                },
                {
                    title:'管家式服务：',
                    desc:'管家式服务是Sapling为客户打造的全程贴心支持，涵盖代孕周期中的方方面面。我们的团队会帮助客户管理医疗预约、处理法律文件、协调代孕相关事务、监督资金流向，并提供实时沟通支持。无论是大事还是小事，我们都以高效、周到的方式为客户打理，确保整个过程顺利且省心。'
                },
                {
                    title:'全包保险：',
                    desc:'Sapling提供全包保险保障，涵盖代孕过程中可能出现的各种风险。无论是胚胎移植失败、意外流产，还是其他突发情况，我们将承担所有相关费用，客户无需支付额外开支。全包保险的设计旨在消除不确定性，为客户提供全程无忧的保障和安心的代孕体验。'
                }
            ]
        },
        questionAndAnswer:[
            {
                title:'茁壮套餐最大的不同在哪里？',
                desc:'全面性和无忧保障除了标准代孕服务外，该套餐还提供全包保险，酒盖从胚胎移植失败到意外流产等所有潜在风险确保客户在任何突发情况下无需额外支付费用。 同时，茁壮套餐还包括升级的管家式服务，从医疗预约到旅行安排，甚至代孕过程中的实时支持，均由专属团队全程打理。 它的核心优势在于为客户提供更高的安全性、更省心的流程管理，以及真正的一站式代孕解决方案。'
            },
            {
                title:'如何支付代孕的费用？',
                desc:'每位客户将拥有专属信托账户，所有资金仅在符合合同条件时支付给代母、机构或其他第三方。信托公司会定期提供账务报告，确保资金管理透明、安全。支付流程通常分为两步：第一笔费用在确认代母或签署服务协议时支付至信托账户：第二笔费用酒盖代母的生活支出和医疗费用，按合同约定的时间或事件节点分期支付。通过这一方式，保障了资金使用的规范性和各方权益。'
            },
            {
                title:'如果您还没有胚胎',
                desc:'如果您还没有胚胎如果您尚未冷冻胚胎、还未决定选择哪家试管医院，或者需要卵子或精子捐赠者的帮助，我们可以为您提供经过 Sapling 严格筛选的医生和医院名单。您可以根据个人需求和常住地进行选择我们也可以为您直接安排合适的医院，帮助您顺利完成下一步的计划。'
            }
        ]

        
    },

    login:{
        title_1:"欢迎来到小树苗代孕中心",
        title_2:"让小树苗更了解你，请先注册/登录",
        login_type:"使用您的电子邮件地址登录",
        email:"电子邮件地址",
        password:"密码",
        remember:"记住帐号",
        forgot_password:"忘记密码?",
        login_btn:"登录",
        login_loading:"正在登录",
        register_title:"创建一个新账户",
        register_desc:"如果这是您第一次请求更多信息或申请我们的计划，请创建一个账户以开始。",
        register_btn:"创建账户"
    },
    careers:{
        title:'职业生涯',
        firstDesc:'Sapling Surrogacy 致力于与最优秀的专业人士合作，为客户提供卓越的服务。<br>加入我们，您将成为一支高度成功、充满热情的团队的一员，共同秉承我们在行业内建立的良好声誉与信任。',
        secondDesc:'<p>想了解更多职位空缺，请访问我们的领英页面。</p>'
    },
    resources:{
        title1:'博客',
        title2:'客户评价',
        blogMenu:[
            {
                text:'准父母',
            },
            {
                text:'代孕妈妈',
            }
        ],
        intendedParentList:[
            {
                image:'/images/resources/list1.png',
                title:'考虑成为一名卵子捐赠者？以下 5 个理由绝对值得你这么做',
                desc:'作为卵子捐赠者，您所提供的东西非常必要，没有您，这一切都不会发生。但为什么您应该考虑成为卵子捐赠者？了解卵子捐赠对您来说可能是一条好路的 5 个原因。'
            },
            {
                image:'/images/resources/list1.png',
                title:'考虑成为一名卵子捐赠者？以下 5 个理由绝对值得你这么做',
                desc:'作为卵子捐赠者，您所提供的东西非常必要，没有您，这一切都不会发生。但为什么您应该考虑成为卵子捐赠者？了解卵子捐赠对您来说可能是一条好路的 5 个原因。'
            },
            {
                image:'/images/resources/list1.png',
                title:'考虑成为一名卵子捐赠者？以下 5 个理由绝对值得你这么做',
                desc:'作为卵子捐赠者，您所提供的东西非常必要，没有您，这一切都不会发生。但为什么您应该考虑成为卵子捐赠者？了解卵子捐赠对您来说可能是一条好路的 5 个原因。'
            },
            {
                image:'/images/resources/list1.png',
                title:'考虑成为一名卵子捐赠者？以下 5 个理由绝对值得你这么做',
                desc:'作为卵子捐赠者，您所提供的东西非常必要，没有您，这一切都不会发生。但为什么您应该考虑成为卵子捐赠者？了解卵子捐赠对您来说可能是一条好路的 5 个原因。'
            },
            {
                image:'/images/resources/list1.png',
                title:'考虑成为一名卵子捐赠者？以下 5 个理由绝对值得你这么做',
                desc:'作为卵子捐赠者，您所提供的东西非常必要，没有您，这一切都不会发生。但为什么您应该考虑成为卵子捐赠者？了解卵子捐赠对您来说可能是一条好路的 5 个原因。'
            }
        ],
        surrogateMomList:[
            {
                image:'/images/resources/list2.png',
                title:'考虑成为一名卵子捐赠者？以下 5 个理由绝对值得你这么做',
                desc:'作为卵子捐赠者，您所提供的东西非常必要，没有您，这一切都不会发生。但为什么您应该考虑成为卵子捐赠者？了解卵子捐赠对您来说可能是一条好路的 5 个原因。'
            }
        ],
        reviewList:[
            {
                name: 'Emily & Michael T.',
                content: '我们永远感谢小树苗代孕中心，让我们实现了成为父母的梦想。从第一次咨询到抱着宝宝的那一天，他们的团队始终细心、专业且无微不至地支持我们。他们对细节的关注和整个过程中展现的关怀无可比拟。感谢小树苗，帮助我们圆了家庭梦想！'
            },
            {
                name: 'Sarah & Jonathan L.',
                content: '选择小树苗代孕中心是我们做过的最正确的决定。他们的团队让这个原本令人不安的过程变得可控，甚至充满喜悦。他们用同理心和专业知识引导我们完成每一步，让我们感受到无微不至的关怀。多亏了小树苗，我们现在成为了一位美丽女孩的骄傲父母。我们无法用言语表达对他们的感激之情！'
            },
            {
                name: 'Jessica M.',
                content: '作为小树苗代孕中心的一名代孕妈妈，这是我人生中最有意义的经历之一。从一开始，他们的团队就全程支持我，确保我感到被重视、被关爱，并对每一步都有清晰的了解。他们以专业和贴心的态度处理每一个细节，让整个旅程顺利且充满意义。我非常自豪能够帮助一个家庭实现他们的梦想。感谢小树苗，为我带来如此温暖和有价值的体验！'
            },
            {
                name: 'XXXXXX',
                content: 'XXXXXX'
            },
            {
                name: 'XXX',
                content: 'XXXX'
            }
        ],
        btn:'加载更多',
        btnText:'没有更多了',
        btnText2:'阅读更多'
    },
    profile:{
        left_nav_1:'个人信息',
        left_nav_2:'成为代孕母',
        left_nav_3:'成为准父母',
        left_nav_4:'线下预约',
        user_menu:'用户菜单',
        profileContent:{
            title:'开始Sapling Surrogacy旅程',
            email:'登录名',
            phone:'手机号码',
            birthday:'出生日期',
            userName:'用户名',
            address:'家庭详细地址',
            edit:"编辑账户"
        },
        surrogateContent:{

        },
        intendedParentContent:{

        }
    }
}