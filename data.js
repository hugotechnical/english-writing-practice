/* Thang luyện viết B1–C1 — dữ liệu bài tập */
window.STAGES = [
 {
  "key": "phrase",
  "name": "Cụm từ",
  "en": "Phrases",
  "desc": "Từ loại, collocation, lượng từ, giới từ, cụm động từ và so sánh trong phạm vi một cụm."
 },
 {
  "key": "clause",
  "name": "Mệnh đề",
  "en": "Clauses",
  "desc": "Nối, rút gọn và biến đổi mệnh đề quan hệ, trạng ngữ, điều kiện và bị động."
 },
 {
  "key": "sentence",
  "name": "Câu",
  "en": "Sentences",
  "desc": "Viết lại câu: thì, so sánh, đảo ngữ, câu chẻ, động từ khuyết thiếu, liên kết."
 },
 {
  "key": "paragraph",
  "name": "Đoạn văn",
  "en": "Paragraphs",
  "desc": "Sắp xếp, sửa lỗi, viết lại và tự viết đoạn văn có yêu cầu cấu trúc."
 },
 {
  "key": "essay",
  "name": "Bài luận",
  "en": "Essays",
  "desc": "Email, bài nghị luận, thảo luận, giải pháp, đề xuất. Claude chấm theo rubric."
 }
];
window.SETS = [
 {
  "id": "ph1",
  "stage": "phrase",
  "lv": "B1",
  "type": "fill",
  "title": "Từ loại trong cụm danh từ",
  "instr": "Điền dạng đúng của từ trong ngoặc.",
  "items": [
   {
    "q": "a ___ business (succeed)",
    "a": [
     "successful"
    ]
   },
   {
    "q": "the rapid ___ of technology (develop)",
    "a": [
     "development"
    ]
   },
   {
    "q": "___ friendly products (environment)",
    "a": [
     "environmentally"
    ],
    "n": "Trạng từ bổ nghĩa cho tính từ friendly."
   },
   {
    "q": "an ___ result (expect) — kết quả bất ngờ",
    "a": [
     "unexpected"
    ]
   },
   {
    "q": "a ___ experiment (danger)",
    "a": [
     "dangerous"
    ]
   },
   {
    "q": "strong ___ growth (economy) — tăng trưởng kinh tế",
    "a": [
     "economic"
    ],
    "n": "economic = thuộc về kinh tế; economical = tiết kiệm."
   }
  ]
 },
 {
  "id": "ph2",
  "stage": "phrase",
  "lv": "B1",
  "type": "fill",
  "title": "V-ing hay to V sau động từ",
  "instr": "Điền dạng đúng của động từ trong ngoặc.",
  "items": [
   {
    "q": "avoid ___ time (waste)",
    "a": [
     "wasting"
    ]
   },
   {
    "q": "decide ___ abroad (study)",
    "a": [
     "to study"
    ]
   },
   {
    "q": "look forward to ___ you (meet)",
    "a": [
     "meeting"
    ],
    "n": "to ở đây là giới từ, nên theo sau là V-ing."
   },
   {
    "q": "be used to ___ up early (get) — đã quen dậy sớm",
    "a": [
     "getting"
    ]
   },
   {
    "q": "stop ___ (smoke) — bỏ hẳn việc hút thuốc",
    "a": [
     "smoking"
    ],
    "n": "stop to smoke = dừng lại (việc khác) để hút thuốc."
   },
   {
    "q": "remember ___ the door (lock) — nhớ phải khoá, việc chưa làm",
    "a": [
     "to lock"
    ],
    "n": "remember + V-ing = nhớ đã làm (việc trong quá khứ)."
   }
  ]
 },
 {
  "id": "ph3",
  "stage": "phrase",
  "lv": "B1",
  "type": "fill",
  "title": "Giới từ trong cụm cố định",
  "instr": "Điền một giới từ.",
  "items": [
   {
    "q": "be interested ___ science",
    "a": [
     "in"
    ]
   },
   {
    "q": "result ___ serious damage — dẫn đến",
    "a": [
     "in"
    ],
    "trap": "Hay bị nhầm thành \"result to\". Đúng là result in (dẫn đến) và result from (do… gây ra)."
   },
   {
    "q": "depend ___ your parents",
    "a": [
     "on"
    ]
   },
   {
    "q": "be responsible ___ the project",
    "a": [
     "for"
    ]
   },
   {
    "q": "be in charge ___ the team",
    "a": [
     "of"
    ]
   },
   {
    "q": "take part ___ a competition",
    "a": [
     "in"
    ]
   }
  ]
 },
 {
  "id": "ph4",
  "stage": "phrase",
  "lv": "B2",
  "type": "fill",
  "title": "Lượng từ",
  "instr": "Điền lượng từ phù hợp với nghĩa gợi ý.",
  "items": [
   {
    "q": "___ information — một chút, nghĩa khẳng định",
    "a": [
     "a little",
     "a bit of",
     "a little bit of"
    ]
   },
   {
    "q": "___ students — rất nhiều, văn trang trọng",
    "a": [
     "a large number of",
     "a great number of",
     "many",
     "a lot of",
     "lots of"
    ]
   },
   {
    "q": "___ money — rất nhiều, văn trang trọng",
    "a": [
     "a great deal of",
     "a large amount of",
     "a lot of",
     "lots of",
     "much"
    ]
   },
   {
    "q": "___ more books — nhiều hơn rất nhiều (danh từ số nhiều)",
    "a": [
     "many",
     "a lot",
     "far"
    ],
    "trap": "Many hay bị xếp chung nhóm với much/far để nhấn mạnh so sánh hơn. Thực ra many chỉ dùng trong many more + danh từ số nhiều."
   },
   {
    "q": "___ more time — hơn rất nhiều (không đếm được)",
    "a": [
     "much",
     "far",
     "a lot"
    ]
   },
   {
    "q": "___ of the two answers is correct — cả hai đều không đúng",
    "a": [
     "neither"
    ]
   }
  ]
 },
 {
  "id": "ph5",
  "stage": "phrase",
  "lv": "B2",
  "type": "fill",
  "title": "Trật tự từ & danh từ ghép",
  "instr": "Viết cụm từ hoàn chỉnh theo gợi ý.",
  "items": [
   {
    "q": "a ___ table (wooden / old / beautiful)",
    "a": [
     "beautiful old wooden"
    ],
    "n": "Trật tự: ý kiến → tuổi → chất liệu."
   },
   {
    "q": "a ___ car — xe thể thao",
    "a": [
     "sports"
    ],
    "trap": "Quy tắc \"danh từ đứng trước trong danh từ ghép không bao giờ có s\" có ngoại lệ: sports car, sales department, savings account."
   },
   {
    "q": "a ___ boy (ten / year / old)",
    "a": [
     "ten-year-old",
     "ten year old"
    ],
    "n": "Tính từ ghép có số đếm: danh từ ở số ít, nối bằng gạch ngang."
   },
   {
    "q": "a ___ day (cold / wet) — dùng dấu phẩy",
    "a": [
     "cold, wet",
     "wet, cold",
     "cold and wet"
    ],
    "trap": "Quy tắc \"hai tính từ đứng liền nhau phải có and\" không đúng. Trước danh từ vẫn viết được a cold, wet day."
   },
   {
    "q": "a ___ account — tài khoản tiết kiệm",
    "a": [
     "savings"
    ]
   },
   {
    "q": "a ___ journey (three / hour)",
    "a": [
     "three-hour",
     "three hour"
    ]
   }
  ]
 },
 {
  "id": "ph6",
  "stage": "phrase",
  "lv": "B2",
  "type": "fill",
  "title": "Cụm động từ",
  "instr": "Viết cụm động từ có nghĩa như gợi ý.",
  "items": [
   {
    "q": "___ the meeting until Monday — hoãn lại",
    "a": [
     "put off"
    ]
   },
   {
    "q": "___ the truth — tìm ra, phát hiện",
    "a": [
     "find out"
    ]
   },
   {
    "q": "___ the noise — chịu đựng",
    "a": [
     "put up with"
    ]
   },
   {
    "q": "___ my classmates — đuổi kịp (sau khi bị tụt lại)",
    "a": [
     "catch up with"
    ],
    "n": "keep up with = theo kịp, không bị tụt lại."
   },
   {
    "q": "had no choice but to ___ my savings — dựa vào (khi khó khăn)",
    "a": [
     "fall back on"
    ],
    "trap": "Lỗi hay gặp: \"had no choice but fell back on\". Sau had no choice but dùng to V: had no choice but to fall back on."
   },
   {
    "q": "___ a bad habit — từ bỏ",
    "a": [
     "give up",
     "kick"
    ]
   }
  ]
 },
 {
  "id": "ph7",
  "stage": "phrase",
  "lv": "C1",
  "type": "fill",
  "title": "So sánh & từ nhấn mạnh",
  "instr": "Điền phần còn thiếu.",
  "items": [
   {
    "q": "This phone is ___ that one. (twice / expensive)",
    "a": [
     "twice as expensive as"
    ]
   },
   {
    "q": "The ___ you practise, the more fluent you become. (much)",
    "a": [
     "more"
    ]
   },
   {
    "q": "This test is ___ easier than the last one. — dễ hơn nhiều",
    "a": [
     "much",
     "far",
     "a lot",
     "considerably"
    ]
   },
   {
    "q": "She is ___ the best student in the class. — hơn hẳn mọi người",
    "a": [
     "by far"
    ]
   },
   {
    "q": "The new library is three times ___ the old one. (large)",
    "a": [
     "as large as",
     "larger than"
    ]
   },
   {
    "q": "Houses are getting ___ . (expensive) — ngày càng đắt",
    "a": [
     "more and more expensive"
    ]
   }
  ]
 },
 {
  "id": "cl1",
  "stage": "clause",
  "lv": "B1",
  "type": "rewrite",
  "title": "Nối câu bằng mệnh đề quan hệ",
  "instr": "Nối hai câu thành một câu, dùng đại từ hoặc trạng từ quan hệ.",
  "items": [
   {
    "q": "The woman is my teacher. She lives next door.",
    "a": [
     "The woman {who|that} lives next door is my teacher"
    ]
   },
   {
    "q": "This is the book. I told you about it.",
    "a": [
     "This is the book {that |which |}I told you about",
     "This is the book about which I told you"
    ]
   },
   {
    "q": "I met a boy. His father is a doctor.",
    "a": [
     "I met a boy whose father is a doctor"
    ]
   },
   {
    "q": "Da Lat is the city. I spent my childhood there.",
    "a": [
     "Da Lat is the city where I spent my childhood",
     "Da Lat is the city in which I spent my childhood",
     "Da Lat is the city {that |which |}I spent my childhood in"
    ]
   },
   {
    "q": "The reason is unclear. He left for that reason.",
    "a": [
     "The reason {why |that |}he left is unclear",
     "The reason for which he left is unclear"
    ],
    "trap": "Nhiều người cho rằng reason \"chỉ đi với why\". The reason (that) và the reason for which cũng đúng."
   },
   {
    "q": "Hanoi is the capital of Vietnam. It has over 8 million people.",
    "cue": "Hanoi, ",
    "a": [
     "Hanoi, which is the capital of Vietnam, has over 8 million people",
     "Hanoi, the capital of Vietnam, has over 8 million people"
    ],
    "n": "Mệnh đề không xác định phải có dấu phẩy và không dùng that."
   }
  ]
 },
 {
  "id": "cl2",
  "stage": "clause",
  "lv": "B2",
  "type": "rewrite",
  "title": "Rút gọn mệnh đề quan hệ",
  "instr": "Rút gọn mệnh đề quan hệ nếu câu rút gọn tự nhiên. Nếu không rút gọn được, chép lại nguyên câu.",
  "items": [
   {
    "q": "The students who are sitting at the back can't hear.",
    "a": [
     "The students sitting at the back {cannot|can not} hear"
    ]
   },
   {
    "q": "The bridge which was built in 1902 is still in use.",
    "a": [
     "The bridge built in 1902 is still in use"
    ]
   },
   {
    "q": "He was the first person who reached the top.",
    "a": [
     "He was the first person to reach the top"
    ]
   },
   {
    "q": "The man who stole my bike has been arrested.",
    "a": [
     "The man who stole my bike has been arrested",
     "The man that stole my bike has been arrested"
    ],
    "trap": "Không phải mệnh đề quan hệ nào cũng rút gọn được thành V-ing. Với hành động đơn lẻ đã xong trong quá khứ, \"the man stealing my bike\" mang nghĩa khác."
   },
   {
    "q": "Anyone who wants to join should sign up today.",
    "a": [
     "Anyone wanting to join should sign up today"
    ]
   },
   {
    "q": "Products that are made in Vietnam are sold worldwide.",
    "a": [
     "Products made in Vietnam are sold worldwide"
    ]
   }
  ]
 },
 {
  "id": "cl3",
  "stage": "clause",
  "lv": "B1",
  "type": "rewrite",
  "title": "Mệnh đề trạng ngữ với liên từ",
  "instr": "Nối hai câu bằng từ trong ngoặc.",
  "items": [
   {
    "q": "It was raining. We went out. (although)",
    "a": [
     "Although it was raining, we went out",
     "We went out although it was raining"
    ]
   },
   {
    "q": "She was tired. She kept working. (despite)",
    "cue": "Despite ",
    "a": [
     "Despite being tired, she kept working",
     "Despite her tiredness, she kept working",
     "Despite the fact that she was tired, she kept working"
    ]
   },
   {
    "q": "He studied hard. He wanted to pass the exam. (so that)",
    "a": [
     "He studied hard so that he {could|would} pass the exam"
    ]
   },
   {
    "q": "I will call you. I arrive. (as soon as)",
    "a": [
     "I will call you as soon as I arrive",
     "As soon as I arrive, I will call you"
    ],
    "n": "Mệnh đề thời gian chỉ tương lai dùng hiện tại đơn, không dùng will."
   },
   {
    "q": "The road was icy. The accident happened. (because of)",
    "a": [
     "The accident happened because of the icy road",
     "Because of the icy road, the accident happened"
    ]
   },
   {
    "q": "She left. I arrived. (before)",
    "a": [
     "She left before I arrived",
     "She had left before I arrived",
     "Before I arrived, she {had |}left"
    ],
    "trap": "Nhiều người cho rằng sau before phải dùng quá khứ hoàn thành mới \"chuẩn\". Khi đã có before, quá khứ đơn hoàn toàn đúng vì liên từ đã thể hiện trình tự."
   }
  ]
 },
 {
  "id": "cl4",
  "stage": "clause",
  "lv": "B2",
  "type": "rewrite",
  "title": "Rút gọn mệnh đề trạng ngữ",
  "instr": "Rút gọn mệnh đề trạng ngữ (hai mệnh đề có cùng chủ ngữ).",
  "items": [
   {
    "q": "After he had finished his homework, he went out.",
    "a": [
     "After finishing his homework, he went out",
     "Having finished his homework, he went out",
     "After having finished his homework, he went out"
    ]
   },
   {
    "q": "Because she was asked to stay late, she missed the bus.",
    "a": [
     "Being asked to stay late, she missed the bus",
     "Having been asked to stay late, she missed the bus",
     "Asked to stay late, she missed the bus"
    ],
    "trap": "Quy tắc \"không bao giờ dùng being + P2 để rút gọn\" không đúng. Being asked… là dạng hợp lệ, chỉ hơi trang trọng."
   },
   {
    "q": "While I was walking home, I saw an accident.",
    "a": [
     "Walking home, I saw an accident",
     "While walking home, I saw an accident"
    ]
   },
   {
    "q": "Since he didn't know the answer, he kept silent.",
    "a": [
     "Not knowing the answer, he kept silent"
    ]
   },
   {
    "q": "Although it was built long ago, the house is still solid.",
    "a": [
     "Although built long ago, the house is still solid"
    ]
   },
   {
    "q": "Sửa câu sai (chủ ngữ treo): Walking into the room, the lights went off.",
    "a": [
     "As I walked into the room, the lights went off",
     "When I walked into the room, the lights went off",
     "Walking into the room, I saw the lights go off",
     "Walking into the room, I noticed the lights go off"
    ],
    "n": "Phân từ rút gọn phải cùng chủ ngữ với mệnh đề chính. Đèn không thể \"walk into the room\"."
   }
  ]
 },
 {
  "id": "cl5",
  "stage": "clause",
  "lv": "B2",
  "type": "rewrite",
  "title": "Mệnh đề điều kiện & điều kiện ẩn",
  "instr": "Viết lại câu bằng mệnh đề if, hoặc theo từ gợi ý.",
  "items": [
   {
    "q": "Hurry up, or you'll miss the train.",
    "a": [
     "If you {do not|don't} hurry up, you will miss the train",
     "Unless you hurry up, you will miss the train"
    ]
   },
   {
    "q": "Without your help, I would have failed.",
    "a": [
     "If you {had not|hadn't} helped me, I would have failed",
     "If it {had not|hadn't} been for your help, I would have failed"
    ]
   },
   {
    "q": "I didn't know her number, so I didn't call her.",
    "a": [
     "If I had known her number, I would have called her"
    ]
   },
   {
    "q": "Take an umbrella, ___ you'll get wet. (một từ)",
    "type": "fill",
    "a": [
     "otherwise",
     "or"
    ],
    "trap": "Nhiều người cho rằng otherwise chỉ dùng với câu điều kiện loại 2/3. Thực ra otherwise dùng được với loại 1: Take an umbrella, otherwise you will get wet."
   },
   {
    "q": "I didn't sleep last night, so I'm tired now.",
    "a": [
     "If I had slept last night, I {would not|wouldn't} be tired now"
    ],
    "n": "Câu điều kiện hỗn hợp: điều kiện trong quá khứ, kết quả ở hiện tại."
   },
   {
    "q": "You can borrow my car. You must drive carefully. (as long as)",
    "a": [
     "You can borrow my car as long as you drive carefully",
     "As long as you drive carefully, you can borrow my car"
    ]
   }
  ]
 },
 {
  "id": "cl6",
  "stage": "clause",
  "lv": "C1",
  "type": "rewrite",
  "title": "Bị động & bị động tường thuật",
  "instr": "Viết lại câu ở dạng bị động, bắt đầu bằng từ gợi ý.",
  "items": [
   {
    "q": "People say that he is a genius.",
    "cue": "It ",
    "a": [
     "It is said that he is a genius"
    ],
    "trap": "It is said that / S is said to V là dạng viết lại câu rất hay thi nhưng thường bị bỏ qua khi học bị động."
   },
   {
    "q": "People say that he is a genius.",
    "cue": "He ",
    "a": [
     "He is said to be a genius"
    ]
   },
   {
    "q": "People believe that the fire started in the kitchen.",
    "cue": "The fire ",
    "a": [
     "The fire is believed to have started in the kitchen"
    ],
    "n": "Hành động xảy ra trước thời điểm \"believe\" nên dùng to have + P2."
   },
   {
    "q": "Someone saw him leaving the building.",
    "cue": "He ",
    "a": [
     "He was seen leaving the building"
    ],
    "trap": "Quy tắc \"sau bị động luôn là to V\" không đúng. Với see/hear + V-ing, dạng bị động vẫn giữ V-ing: was seen leaving."
   },
   {
    "q": "They made the workers work overtime.",
    "cue": "The workers ",
    "a": [
     "The workers were made to work overtime"
    ],
    "n": "make + O + V nguyên mẫu, khi đổi sang bị động thành be made to V."
   },
   {
    "q": "They let him go home early.",
    "cue": "He ",
    "a": [
     "He was allowed to go home early"
    ],
    "n": "let gần như không dùng ở bị động. Dạng tự nhiên là be allowed to. Riêng \"be let go\" là một cụm khác, nghĩa là bị cho nghỉ việc."
   }
  ]
 },
 {
  "id": "se1",
  "stage": "sentence",
  "lv": "B1",
  "type": "rewrite",
  "title": "Thì & phối thì",
  "instr": "Viết lại câu sao cho nghĩa không đổi, bắt đầu bằng từ gợi ý.",
  "items": [
   {
    "q": "I last saw him two years ago.",
    "cue": "It ",
    "a": [
     "It {is|has been} two years since I {last |}saw him"
    ],
    "trap": "Quy tắc \"không bao giờ có một vế hiện tại và một vế quá khứ đơn\" không đúng. It is two years since I saw him là câu đúng và rất hay thi."
   },
   {
    "q": "He started working here in 2020.",
    "cue": "He has ",
    "a": [
     "He has {worked|been working} here since 2020"
    ]
   },
   {
    "q": "\"The earth goes round the sun,\" the teacher said.",
    "cue": "The teacher said that ",
    "a": [
     "The teacher said that the earth {goes|went} round the sun"
    ],
    "trap": "Quy tắc \"sau said không còn thì hiện tại\" có ngoại lệ: chân lý và sự thật vẫn đúng có thể giữ thì hiện tại."
   },
   {
    "q": "\"I am tired,\" she said.",
    "cue": "She said ",
    "a": [
     "She said {that |}she was tired"
    ]
   },
   {
    "q": "This is the first time I have eaten pho.",
    "cue": "I have never ",
    "a": [
     "I have never eaten pho before"
    ]
   },
   {
    "q": "By the time we arrived, the film ___ (start).",
    "type": "fill",
    "a": [
     "had started",
     "had already started"
    ]
   }
  ]
 },
 {
  "id": "se2",
  "stage": "sentence",
  "lv": "B1",
  "type": "rewrite",
  "title": "Câu so sánh",
  "instr": "Viết lại câu sao cho nghĩa không đổi, bắt đầu bằng từ gợi ý.",
  "items": [
   {
    "q": "No one in my class is taller than Nam.",
    "cue": "Nam ",
    "a": [
     "Nam is the tallest {student |person |}in my class"
    ]
   },
   {
    "q": "This book isn't as interesting as that one.",
    "cue": "That book ",
    "a": [
     "That book is more interesting than this one",
     "That book is more interesting than this book"
    ]
   },
   {
    "q": "As it gets colder, I feel sleepier.",
    "cue": "The colder ",
    "a": [
     "The colder it gets, the sleepier I feel"
    ]
   },
   {
    "q": "I have never seen such a beautiful beach.",
    "cue": "This is ",
    "a": [
     "This is the most beautiful beach {that |}I have ever seen"
    ]
   },
   {
    "q": "My brother is 1m80. I am 1m60.",
    "cue": "My brother ",
    "a": [
     "My brother is 20 {cm|centimetres|centimeters} taller than {me|I am}"
    ]
   },
   {
    "q": "She doesn't drive as carefully as her sister.",
    "cue": "Her sister ",
    "a": [
     "Her sister drives more carefully than {she does|her}"
    ]
   }
  ]
 },
 {
  "id": "se3",
  "stage": "sentence",
  "lv": "B2",
  "type": "rewrite",
  "title": "Đảo ngữ câu điều kiện",
  "instr": "Viết lại câu ở dạng đảo ngữ, bắt đầu bằng từ gợi ý.",
  "items": [
   {
    "q": "If you should need any help, call me.",
    "cue": "Should ",
    "a": [
     "Should you need {any |}help, call me"
    ]
   },
   {
    "q": "If I were you, I would accept the offer.",
    "cue": "Were ",
    "a": [
     "Were I you, I would accept the offer"
    ]
   },
   {
    "q": "If they had not developed this tool, students would have struggled.",
    "cue": "Had ",
    "a": [
     "Had they not developed this tool, students would have struggled"
    ],
    "n": "Không viết Hadn't they developed: not phải đứng sau chủ ngữ."
   },
   {
    "q": "If it weren't for the internet, we couldn't work from home.",
    "cue": "Were ",
    "a": [
     "Were it not for the internet, we {could not|couldn't} work from home"
    ],
    "trap": "Were it not for / Had it not been for là dạng rất hay gặp trong đề nhưng thường bị bỏ sót khi học đảo ngữ."
   },
   {
    "q": "But for his advice, I would have made a mistake.",
    "cue": "Had ",
    "a": [
     "Had it not been for his advice, I would have made a mistake"
    ]
   },
   {
    "q": "If you were to win the lottery, what would you do?",
    "cue": "Were ",
    "a": [
     "Were you to win the lottery, what would you do"
    ]
   }
  ]
 },
 {
  "id": "se4",
  "stage": "sentence",
  "lv": "B2",
  "type": "rewrite",
  "title": "Đảo ngữ nhấn mạnh",
  "instr": "Viết lại câu ở dạng đảo ngữ, bắt đầu bằng từ gợi ý.",
  "items": [
   {
    "q": "I have rarely seen such unity among young people.",
    "cue": "Rarely ",
    "a": [
     "Rarely have I seen such unity among young people"
    ]
   },
   {
    "q": "As soon as he arrived, it started to rain.",
    "cue": "No sooner ",
    "a": [
     "No sooner had he arrived than it started to rain"
    ],
    "n": "No sooner đi với than. Hardly, Barely và Scarcely đi với when."
   },
   {
    "q": "As soon as he arrived, it started to rain.",
    "cue": "Hardly ",
    "a": [
     "Hardly had he arrived when it started to rain"
    ]
   },
   {
    "q": "The city didn't start recycling until 2020.",
    "cue": "Not until ",
    "a": [
     "Not until 2020 did the city start recycling"
    ]
   },
   {
    "q": "You must not open this door under any circumstances.",
    "cue": "Under no circumstances ",
    "a": [
     "Under no circumstances {must|should} you open this door"
    ]
   },
   {
    "q": "The storm was so powerful that it destroyed hundreds of houses.",
    "cue": "Such ",
    "a": [
     "Such was the power of the storm that it destroyed hundreds of houses",
     "Such was the force of the storm that it destroyed hundreds of houses"
    ],
    "trap": "Lỗi hay gặp: \"Such was the powerful storm that…\". Sau Such + be là danh từ: Such was the power of the storm…"
   },
   {
    "q": "I didn't know at all that she was watching me.",
    "cue": "Little ",
    "a": [
     "Little did I know that she was watching me"
    ],
    "trap": "Little hay bị dịch là \"hiếm khi\". Trong Little did I know, little nghĩa là \"hoàn toàn không\"."
   },
   {
    "q": "An ancient tower stands on the hill.",
    "cue": "On the hill ",
    "a": [
     "On the hill stands an ancient tower"
    ],
    "trap": "Nhiều người cho rằng dạng đảo ngữ này \"chỉ dùng với quá khứ đơn\". Thì hiện tại vẫn dùng được: On the hill stands… / Here comes the bus."
   }
  ]
 },
 {
  "id": "se5",
  "stage": "sentence",
  "lv": "B2",
  "type": "rewrite",
  "title": "Câu chẻ",
  "instr": "Viết lại câu để nhấn mạnh, bắt đầu bằng từ gợi ý.",
  "items": [
   {
    "q": "Mai broke the vase.",
    "cue": "It was ",
    "a": [
     "It was Mai {who|that} broke the vase"
    ]
   },
   {
    "q": "I didn't realise the truth until I read the letter.",
    "cue": "It was not until ",
    "a": [
     "It was not until I read the letter that I realised the truth",
     "It was not until I read the letter that I realized the truth"
    ],
    "trap": "It was not until… that là dạng viết lại câu chẻ gặp nhiều nhất nhưng thường bị bỏ sót."
   },
   {
    "q": "She became a singer at the age of 9.",
    "cue": "What she did at the age of 9 ",
    "a": [
     "What she did at the age of 9 was {to |}become a singer"
    ],
    "trap": "Nhiều người cho rằng phải dùng \"was to become\" và \"was become\" là sai. Sau What… did was, động từ nguyên mẫu không to (become) hoàn toàn đúng, to become cũng đúng."
   },
   {
    "q": "I need a long holiday.",
    "cue": "What I ",
    "a": [
     "What I need is a long holiday"
    ]
   },
   {
    "q": "The noise annoys me.",
    "cue": "What ",
    "a": [
     "What annoys me is the noise"
    ]
   },
   {
    "q": "They met in Hue.",
    "cue": "It was ",
    "a": [
     "It was in Hue that they met",
     "It was in Hue where they met"
    ]
   }
  ]
 },
 {
  "id": "se6",
  "stage": "sentence",
  "lv": "C1",
  "type": "rewrite",
  "title": "Động từ khuyết thiếu & suy đoán",
  "instr": "Viết lại câu bằng động từ khuyết thiếu trong ngoặc.",
  "items": [
   {
    "q": "I'm sure he forgot the meeting. (must)",
    "a": [
     "He must have forgotten the meeting",
     "He must have forgotten about the meeting"
    ]
   },
   {
    "q": "It's impossible that she said that. (can't)",
    "a": [
     "She {can't|cannot|couldn't|could not} have said that"
    ]
   },
   {
    "q": "Perhaps they took the wrong road. (might)",
    "a": [
     "They {might|may|could} have taken the wrong road"
    ]
   },
   {
    "q": "You brought food, but it wasn't necessary. (needn't)",
    "a": [
     "You {needn't|need not} have brought food",
     "You {needn't|need not} have brought any food"
    ]
   },
   {
    "q": "You didn't tell her. That was a mistake. (should)",
    "a": [
     "You should have told her"
    ]
   },
   {
    "q": "It is necessary for us to finish today. (need)",
    "a": [
     "We need to finish today"
    ],
    "trap": "Lỗi hay gặp: cho rằng câu khẳng định dùng được cả need + V lẫn need + to V. Câu khẳng định chỉ dùng need to V. Need + V nguyên mẫu chỉ có trong câu phủ định hoặc nghi vấn: You needn't go."
   }
  ]
 },
 {
  "id": "se7",
  "stage": "sentence",
  "lv": "C1",
  "type": "rewrite",
  "title": "Liên kết, song hành, đồng vị",
  "instr": "Viết lại câu theo yêu cầu.",
  "items": [
   {
    "q": "Sửa lỗi song hành: She likes reading, to swim and go hiking.",
    "a": [
     "She likes reading, swimming and hiking",
     "She likes reading, swimming, and hiking"
    ]
   },
   {
    "q": "The project was expensive. It was also late. (Not only)",
    "cue": "Not only ",
    "a": [
     "Not only was the project expensive{,|} but it was also late",
     "Not only was the project expensive{,|} but {it was |}late as well"
    ]
   },
   {
    "q": "Hue was once the capital of Vietnam. It attracts many tourists. (ngữ đồng vị)",
    "cue": "Hue, ",
    "a": [
     "Hue, once the capital of Vietnam, attracts many tourists",
     "Hue, the former capital of Vietnam, attracts many tourists"
    ]
   },
   {
    "q": "The plan was cheap. It was ineffective. (however)",
    "a": [
     "The plan was cheap{.|;} However, it was ineffective",
     "The plan was cheap{.|;} however, it was ineffective",
     "The plan was cheap. It was, however, ineffective"
    ]
   },
   {
    "q": "Many families use fans. Fans only move air. (which)",
    "a": [
     "Many families use fans, which only move air"
    ],
    "trap": "Công thức \"sau dấu phẩy là which + động từ số ít\" không đúng. Động từ sau which chia theo danh từ mà which thay thế: fans → move."
   },
   {
    "q": "Although prices were rising, people kept buying. (Despite)",
    "cue": "Despite ",
    "a": [
     "Despite prices rising, people kept buying",
     "Despite rising prices, people kept buying",
     "Despite the fact that prices were rising, people kept buying"
    ],
    "trap": "Nhiều người cho rằng \"despite + N + V-ing\" sai ngữ pháp. Despite prices rising… là dạng hợp lệ."
   },
   {
    "q": "Sửa câu cụt: Because he was late. He missed the bus.",
    "a": [
     "Because he was late, he missed the bus",
     "He missed the bus because he was late"
    ],
    "trap": "although/because không nối hai mệnh đề độc lập. Mệnh đề bắt đầu bằng because là mệnh đề phụ, không đứng một mình thành câu được."
   }
  ]
 },
 {
  "id": "pa1",
  "stage": "paragraph",
  "lv": "B1",
  "type": "order",
  "title": "Sắp xếp đoạn văn: câu lạc bộ tiếng Anh",
  "instr": "Gõ thứ tự đúng của các câu, ví dụ: bdaec.",
  "sents": {
   "a": "First, we meet every Tuesday after school to practise speaking.",
   "b": "Our school's English club was set up two years ago.",
   "c": "Finally, at the end of each term, we perform a short play for the whole school.",
   "d": "Since then, it has grown from ten to fifty members.",
   "e": "Then, on Fridays, we watch a short film and discuss it."
  },
  "ans": "bdaec",
  "n": "Câu mở giới thiệu chủ đề (b). Since then nối với mốc thời gian ở b. Sau đó là chuỗi First → Then → Finally."
 },
 {
  "id": "pa2",
  "stage": "paragraph",
  "lv": "B1",
  "type": "order",
  "title": "Sắp xếp hội thoại: rủ đi xem hoà nhạc",
  "instr": "Gõ thứ tự đúng của các lượt lời.",
  "sents": {
   "a": "Sure. What time does it start?",
   "b": "Hi Tom, are you free on Saturday evening?",
   "c": "At seven. I'll pick you up at half past six.",
   "d": "Yes, I think so. Why?",
   "e": "There's a concert in the park. Would you like to come?"
  },
  "ans": "bdeac",
  "n": "Mỗi câu hỏi phải có câu trả lời ngay sau nó: Why? → lời mời → Sure. What time? → At seven."
 },
 {
  "id": "pa3",
  "stage": "paragraph",
  "lv": "B1",
  "type": "write",
  "title": "Gộp câu ngắn thành đoạn văn",
  "task": "Viết lại đoạn sau thành 2–4 câu, dùng mệnh đề quan hệ và liên từ: \"My town is small. It is in the north of Vietnam. Many people visit it. They come in spring. The weather is cool then. There is a famous market. It opens every Sunday. People sell local food there.\"",
  "words": [
   35,
   70
  ],
  "req": [
   "Có ít nhất 2 mệnh đề quan hệ",
   "Có ít nhất 1 liên từ hoặc trạng từ chỉ thời gian",
   "Từ 2 đến 4 câu",
   "Giữ đủ các ý của đoạn gốc"
  ],
  "model": "My town is a small place in the north of Vietnam which many people visit in spring, when the weather is cool. It is also famous for a market that opens every Sunday, where people sell local food."
 },
 {
  "id": "pa4",
  "stage": "paragraph",
  "lv": "B1",
  "type": "write",
  "title": "Email mời bạn",
  "task": "Viết email (80–100 từ) mời một người bạn nước ngoài tham dự lễ hội trường bạn vào cuối tuần này. Nêu thời gian, hoạt động chính và lý do bạn ấy nên đến.",
  "words": [
   80,
   100
  ],
  "req": [
   "Mở và kết thư phù hợp",
   "Dùng will hoặc be going to cho kế hoạch",
   "Có 1 câu điều kiện loại 1",
   "Có cụm look forward to + V-ing"
  ],
  "model": "Hi Emma,\n\nAre you free this Saturday? My school is going to hold its annual festival, and I would love you to come. It starts at 8 a.m. and there will be food stalls, music performances and traditional games. If you come early, you can try making bánh chưng with my classmates. I think you will enjoy it because you can learn a lot about Vietnamese culture. Let me know and I will meet you at the gate.\n\nI look forward to seeing you there!\n\nBest wishes,\nLinh"
 },
 {
  "id": "pa5",
  "stage": "paragraph",
  "lv": "B1",
  "type": "write",
  "title": "Đoạn văn có câu chủ đề",
  "task": "Viết đoạn văn (90–110 từ) nêu hai lợi ích của việc học trực tuyến đối với học sinh THPT.",
  "words": [
   90,
   110
  ],
  "req": [
   "Có câu chủ đề nêu ý chính",
   "Có 2 lý do, mỗi lý do kèm ví dụ",
   "Dùng từ nối (Firstly / In addition / For example)",
   "Có câu kết"
  ],
  "model": "Online learning offers high school students two important benefits. Firstly, it allows them to study at their own pace. For example, a student who does not understand a grammar lesson can watch the video again until it makes sense. In addition, online learning saves time and money. Students living far from the city no longer need to travel to extra classes, so they have more time to rest and review. In short, when it is used wisely, online learning can make studying both more flexible and more effective."
 },
 {
  "id": "pa6",
  "stage": "paragraph",
  "lv": "B1",
  "type": "write",
  "title": "Kể lại một trải nghiệm",
  "task": "Viết đoạn văn (90–110 từ) kể về lần đầu bạn làm một việc khó, ví dụ thuyết trình, đi xe buýt một mình hay nấu một món ăn.",
  "words": [
   90,
   110
  ],
  "req": [
   "Dùng quá khứ đơn và quá khứ tiếp diễn",
   "Có 1 câu dùng quá khứ hoàn thành",
   "Có 1 cụm After/Before + V-ing",
   "Nêu cảm xúc hoặc bài học ở cuối"
  ],
  "model": "The first time I gave a presentation in English, I was extremely nervous. I had practised for a whole week, but my hands were shaking while I was walking to the front of the class. After taking a deep breath, I started to speak slowly. At first, I forgot a few words, but my classmates were smiling and nodding, which made me feel more confident. When I finished, my teacher said my ideas were clear. I learned that preparation matters, but staying calm matters just as much."
 },
 {
  "id": "pa7",
  "stage": "paragraph",
  "lv": "B2",
  "type": "order",
  "title": "Sắp xếp đoạn nghị luận: túi nilon",
  "instr": "Gõ thứ tự đúng của các câu.",
  "sents": {
   "a": "However, critics argue that such a ban would hurt small shop owners who rely on cheap packaging.",
   "b": "Many cities are considering a complete ban on single-use plastic bags.",
   "c": "Supporters of the idea point out that these bags take hundreds of years to break down.",
   "d": "A gradual approach, therefore, may be the most realistic solution.",
   "e": "As a result, they pollute rivers and oceans long after being thrown away."
  },
  "ans": "bcead",
  "n": "b nêu vấn đề. c đưa lập luận ủng hộ, e là hệ quả của c (these bags → they). a là phản biện (However). d là kết luận (therefore). Câu However thường đứng ở giữa đoạn, không phải lúc nào cũng ở cuối."
 },
 {
  "id": "pa8",
  "stage": "paragraph",
  "lv": "B2",
  "type": "write",
  "title": "Sửa lỗi trong đoạn văn",
  "task": "Đoạn văn sau có 5 lỗi ngữ pháp và 1 chỗ trông như lỗi nhưng thực ra đúng. Viết lại đoạn văn đã sửa: \"The reason why many students choose online courses are flexibility. Being asked about it, most say they need to studying at their own pace. Such was the popular online learning that schools had to change. It is two years since our school has introduced a new platform, which help students a lot.\"",
  "words": [
   45,
   70
  ],
  "req": [
   "Sửa lỗi hoà hợp chủ ngữ – động từ (The reason … is)",
   "Sửa need to studying → need to study",
   "Sửa cấu trúc Such was + danh từ",
   "Sửa thì sau since (introduced)",
   "Sửa which help → which helps",
   "Giữ nguyên \"Being asked about it\" vì câu này đúng"
  ],
  "model": "The reason why many students choose online courses is flexibility. Being asked about it, most say they need to study at their own pace. Such was the popularity of online learning that schools had to change. It is two years since our school introduced a new platform, which helps students a lot."
 },
 {
  "id": "pa9",
  "stage": "paragraph",
  "lv": "B2",
  "type": "write",
  "title": "Đoạn văn vấn đề – giải pháp",
  "task": "Viết đoạn văn (120–150 từ) về rác thải nhựa ở các thành phố Việt Nam: nêu nguyên nhân và đề xuất một giải pháp.",
  "words": [
   120,
   150
  ],
  "req": [
   "Có ít nhất 2 câu bị động",
   "Có 1 mệnh đề quan hệ rút gọn",
   "Có 1 câu điều kiện loại 1",
   "Có trạng từ liên kết chỉ kết quả (Therefore / As a result)"
  ],
  "model": "Plastic waste has become a serious problem in Vietnamese cities. Every day, millions of bags and bottles are used once and then thrown away. Much of this waste is not collected properly, and rubbish left on the streets is often washed into rivers and canals. As a result, drains become blocked and flooding gets worse during the rainy season. One practical solution is to introduce a deposit scheme for plastic bottles. Under such a scheme, customers would pay a small extra fee and get it back when they return the bottle. If shops join the scheme, people will have a clear reason to recycle instead of littering. Therefore, a simple financial incentive could reduce plastic waste far more effectively than posters or slogans alone."
 },
 {
  "id": "pa10",
  "stage": "paragraph",
  "lv": "B2",
  "type": "write",
  "title": "Đoạn văn so sánh",
  "task": "Viết đoạn văn (120–150 từ) so sánh việc đi lại bằng xe máy và bằng xe buýt ở thành phố lớn.",
  "words": [
   120,
   150
  ],
  "req": [
   "Có 2 câu so sánh hơn có từ nhấn mạnh (much / far)",
   "Có cấu trúc the … the …",
   "Dùng whereas hoặc while để đối chiếu",
   "Có câu kết nêu quan điểm"
  ],
  "model": "In big cities such as Hanoi, motorbikes and buses offer very different experiences. Motorbikes are far more flexible, since riders can go door to door and avoid waiting. Buses, in contrast, follow fixed routes and timetables. On the other hand, buses are much safer and, over a month of travel, considerably cheaper. While a motorbike rider is exposed to rain, dust and heavy traffic, a bus passenger can sit, read or even rest. Moreover, the more people choose buses, the fewer vehicles there are on the road, which benefits everyone. Overall, although motorbikes remain more convenient for short trips, buses are the more sustainable choice for daily commuting."
 },
 {
  "id": "pa11",
  "stage": "paragraph",
  "lv": "B2",
  "type": "write",
  "title": "Mô tả số liệu",
  "task": "Viết đoạn văn (120–150 từ) mô tả số liệu sau: tỷ lệ học sinh THPT dùng công cụ AI để học tăng từ 20% (2022) lên 45% (2023) và 65% (2025). Tỷ lệ học sinh chỉ học bằng sách giảm từ 50% xuống 25% trong cùng giai đoạn.",
  "words": [
   120,
   150
  ],
  "req": [
   "Có câu tổng quan nêu xu hướng chính",
   "Dùng từ vựng chỉ xu hướng (rise, increase, fall, decline)",
   "Có số liệu kèm by / to / from",
   "Có 1 câu so sánh giữa hai nhóm"
  ],
  "model": "The figures show how high school students' study habits changed between 2022 and 2025. Overall, the use of AI tools rose sharply, while the proportion of students who relied only on books declined. In 2022, just 20% of students used AI to study. This figure more than doubled to 45% a year later and then climbed to 65% in 2025, an increase of 45 percentage points over the period. By contrast, the share of students learning only from books fell from 50% to 25%, halving in three years. As a result, by 2025 students using AI outnumbered book-only learners by a ratio of more than two to one. This suggests that digital tools are quickly becoming a normal part of studying."
 },
 {
  "id": "pa12",
  "stage": "paragraph",
  "lv": "B2",
  "type": "write",
  "title": "Đoạn kể chuyện có đảo ngữ",
  "task": "Viết đoạn văn (120–150 từ) kể về một ngày mọi việc không như dự định, ví dụ chuyến đi bị huỷ hoặc trời đổ mưa.",
  "words": [
   120,
   150
  ],
  "req": [
   "Có 1 câu No sooner … than hoặc Hardly … when",
   "Có 1 cụm phân từ rút gọn (Having + P2 / V-ing đầu câu)",
   "Có quá khứ hoàn thành",
   "Có Little did I know hoặc Only then did …"
  ],
  "model": "Last summer, my friends and I planned a trip to Ha Long Bay. Having booked the tickets weeks in advance, we felt completely prepared. Little did we know that a storm was approaching. No sooner had we arrived at the bus station than the driver announced that all trips had been cancelled. Standing in the rain with our bags, we did not know what to do. Then my friend suggested visiting a small museum nearby. At first, nobody was enthusiastic, but the exhibition turned out to be fascinating. We spent the afternoon learning about the history of the region and laughing at our bad luck. Only then did I realise that the best memories are sometimes the ones we never planned."
 },
 {
  "id": "pa13",
  "stage": "paragraph",
  "lv": "C1",
  "type": "order",
  "title": "Sắp xếp đoạn học thuật: làm việc từ xa",
  "instr": "Gõ thứ tự đúng của các câu. Chú ý các từ quy chiếu.",
  "sents": {
   "a": "This shift, however, has not come without costs.",
   "b": "Over the past decade, remote work has moved from a rare privilege to a standard option for millions of employees.",
   "c": "Chief among these is a growing sense of isolation, which many workers describe as their biggest challenge.",
   "d": "Its appeal is easy to understand: no commute, flexible hours and greater control over one's environment.",
   "e": "Companies that wish to keep remote staff engaged must therefore invest as much in connection as in technology."
  },
  "ans": "bdace",
  "n": "Its (d) quy chiếu về remote work (b). This shift (a) tóm lại b–d và chuyển sang mặt trái. these (c) = costs (a). therefore (e) rút ra kết luận."
 },
 {
  "id": "pa14",
  "stage": "paragraph",
  "lv": "C1",
  "type": "write",
  "title": "Viết lại theo văn phong trang trọng",
  "task": "Viết lại đoạn sau theo văn phong trang trọng, dùng đảo ngữ, bị động tường thuật và câu chẻ: \"We didn't realise how serious the problem was until the floods came. The government only acted after thousands of homes were damaged. People say that the drainage system is too old. We need a long-term plan now, not quick fixes.\"",
  "words": [
   55,
   90
  ],
  "req": [
   "Có Not until … did …",
   "Có Only after … did …",
   "Có bị động tường thuật (is said to be / It is said that)",
   "Có câu chẻ What … is …"
  ],
  "model": "Not until the floods came did we realise how serious the problem was. Only after thousands of homes had been damaged did the government take action. The drainage system is said to be too old to cope with heavy rain. What is needed now is a long-term plan rather than a series of quick fixes."
 },
 {
  "id": "pa15",
  "stage": "paragraph",
  "lv": "C1",
  "type": "write",
  "title": "Đoạn nghị luận: AI trong phòng thi",
  "task": "Viết đoạn văn nghị luận (150–180 từ) trả lời câu hỏi: \"Có nên cho phép học sinh dùng AI trong một số bài kiểm tra không?\"",
  "words": [
   150,
   180
  ],
  "req": [
   "Câu chủ đề nêu rõ lập trường",
   "Có ít nhất 1 câu đảo ngữ",
   "Có ít nhất 1 câu chẻ",
   "Có ngôn ngữ rào đón (may, is likely to, arguably)",
   "Có nhượng bộ (While / Admittedly) rồi phản bác"
  ],
  "model": "Allowing students to use AI in certain tests would, I believe, make assessment more meaningful rather than less. Admittedly, there is a risk that weaker students may simply copy what the machine produces. However, it is precisely this risk that well-designed tasks can remove. If a test asks students to evaluate, correct or improve an AI-generated answer, it measures judgement instead of memory, and judgement is arguably the skill they will need most at work. Not only would such tests be more realistic, but they would also encourage students to treat AI as a tool to question rather than an oracle to trust. Under no circumstances, of course, should AI be permitted in tests of basic skills such as spelling or mental arithmetic, where the aim is to check what a learner can do alone. Used selectively, however, AI in the exam room is likely to produce graduates who are both competent and critical."
 },
 {
  "id": "pa16",
  "stage": "paragraph",
  "lv": "C1",
  "type": "write",
  "title": "Đoạn nguyên nhân – kết quả: di cư ra thành phố",
  "task": "Viết đoạn văn (150–180 từ) phân tích nguyên nhân và hệ quả của việc người trẻ từ nông thôn chuyển ra thành phố.",
  "words": [
   150,
   180
  ],
  "req": [
   "Có cụm phân từ (V-ing / P2 đầu câu)",
   "Có It is believed/estimated that … hoặc S is thought to …",
   "Có 1 câu điều kiện hỗn hợp",
   "Có ít nhất 2 từ nối chỉ nguyên nhân – kết quả"
  ],
  "model": "Attracted by higher wages and better education, millions of young people have left Vietnam's countryside for its cities over the past two decades. It is estimated that more than a third of the urban population was born elsewhere. The main driver is economic: factory and service jobs in cities pay considerably more than farming, and they offer a clearer path to promotion. Consequently, rural areas are increasingly made up of elderly residents and young children, which places a heavy burden on grandparents. Meanwhile, cities struggle to provide enough affordable housing, leading to overcrowded rented rooms on the urban fringe. If governments had invested earlier in rural industries, many villages would not be facing such labour shortages today. Seen from this perspective, migration is less a personal choice than a response to unequal development, and the solution therefore lies in creating opportunities where people already live."
 },
 {
  "id": "pa17",
  "stage": "paragraph",
  "lv": "C1",
  "type": "write",
  "title": "Tóm tắt đoạn văn",
  "task": "Tóm tắt văn bản sau trong 50–70 từ, dùng từ ngữ của bạn: \"For many years, Vietnamese parents have regarded a university degree as the only reliable route to a stable career. Vocational training, by contrast, was often seen as a second-best option for students with lower exam scores. This view is slowly changing. Employers in manufacturing, tourism and technology increasingly report shortages of skilled technicians, electricians and chefs, and many of these jobs now pay as well as office work. Vocational programmes are also shorter and cheaper, allowing graduates to start earning several years earlier. Nevertheless, social prejudice remains strong, and many capable students still avoid vocational schools for fear of being judged.\"",
  "words": [
   50,
   70
  ],
  "req": [
   "Nêu đủ 3 ý: quan niệm cũ, lý do quan niệm đang thay đổi, rào cản còn lại",
   "Không chép nguyên câu từ văn bản",
   "Có ít nhất 1 cụm đồng vị hoặc mệnh đề quan hệ",
   "Viết thành một đoạn liền mạch"
  ],
  "model": "Although a university degree has long been considered the only path to a secure career in Vietnam, attitudes towards vocational training are shifting. Skilled trades, which are now in high demand and often well paid, require shorter and cheaper courses, so graduates begin earning sooner. However, many able students still reject this route because of persistent social stigma."
 },
 {
  "id": "pa18",
  "stage": "paragraph",
  "lv": "C1",
  "type": "write",
  "title": "Phản biện một quan niệm",
  "task": "Viết đoạn văn (150–180 từ) phản biện quan niệm: \"Chỉ có học đại học mới có thể tìm được việc làm tốt.\"",
  "words": [
   150,
   180
  ],
  "req": [
   "Nêu quan niệm cần phản biện, rồi phản bác",
   "Có Not only … but also … (dạng đảo ngữ)",
   "Có Only by/when … + đảo ngữ",
   "Có ngữ đồng vị",
   "Có ví dụ cụ thể"
  ],
  "model": "Many people still believe that a good job is only possible with a university degree. This belief, however, no longer reflects the reality of the labour market. Not only are skilled trades in high demand, but they also offer incomes comparable to many office positions. Consider Minh, a 24-year-old electrician from Hai Phong, who completed a two-year vocational course and now runs a small business employing five people. His classmates who chose university, by contrast, graduated two years later and are still searching for stable work. This is not to say that degrees have lost their value; for careers such as medicine or law, they remain essential. Yet only when young people judge each path by its actual opportunities, rather than by its social prestige, will they make choices that suit their abilities. A degree, in other words, is one route to success, not the only one."
 },
 {
  "id": "es1",
  "stage": "essay",
  "lv": "B1",
  "type": "write",
  "title": "Email trả lời bạn về Tết",
  "task": "Một người bạn Anh viết: \"I'm curious about Tet. What do people usually do, and what is your favourite part?\" Viết email trả lời (120–150 từ).",
  "words": [
   120,
   150
  ],
  "req": [
   "Mở và kết thư thân mật",
   "Trả lời đủ cả hai câu hỏi",
   "Dùng hiện tại đơn cho thói quen, có trạng từ tần suất",
   "Có ít nhất 1 mệnh đề quan hệ",
   "Có lời mời hoặc câu hỏi lại ở cuối"
  ],
  "outline": [
   "Câu cảm ơn và dẫn vào",
   "Đoạn 1: người Việt thường làm gì dịp Tết (dọn nhà, nấu bánh chưng, thăm họ hàng, lì xì)",
   "Đoạn 2: phần bạn thích nhất và lý do",
   "Kết: mời bạn đến Việt Nam hoặc hỏi lại về lễ hội của bạn ấy"
  ],
  "model": "Hi Jack,\n\nThanks for your email! I'm happy to tell you about Tet, which is the most important holiday in Vietnam.\n\nBefore Tet, families usually clean and decorate their houses with peach or apricot blossoms. Many people also cook bánh chưng, a square rice cake that is wrapped in green leaves. On the first days of the new year, we visit our relatives and wish them good health. Children often receive lucky money in red envelopes.\n\nMy favourite part is New Year's Eve. My whole family gets together for a big dinner, and at midnight we watch the fireworks from our roof. It is the only time of the year when everyone is at home at the same time.\n\nWhy don't you visit Vietnam next Tet? I'd love to show you around.\n\nBest wishes,\nNam"
 },
 {
  "id": "es2",
  "stage": "essay",
  "lv": "B1",
  "type": "write",
  "title": "Bài luận quan điểm: đồng phục học sinh",
  "task": "\"Học sinh nên mặc đồng phục khi đến trường.\" Bạn đồng ý hay không đồng ý? Viết bài luận 150–180 từ.",
  "words": [
   150,
   180
  ],
  "req": [
   "Mở bài nêu rõ quan điểm",
   "2 đoạn thân bài, mỗi đoạn một lý do có ví dụ",
   "Dùng từ nối (Firstly, Moreover, However)",
   "Có 1 câu so sánh và 1 câu điều kiện",
   "Kết bài nhắc lại quan điểm"
  ],
  "outline": [
   "Mở bài: đồng ý, đồng phục mang lại lợi ích",
   "Thân 1: tạo sự bình đẳng, giảm áp lực về quần áo đắt tiền",
   "Thân 2: tiết kiệm thời gian, tạo tinh thần tập thể",
   "Kết: nhắc lại quan điểm, có thể cho mặc tự do một ngày mỗi tuần"
  ],
  "model": "Many schools in Vietnam require students to wear uniforms, and some people think this rule is old-fashioned. In my opinion, school uniforms bring more advantages than disadvantages.\n\nFirstly, uniforms make students feel equal. If everyone wears the same clothes, nobody is judged by how expensive their clothes are. This is especially important for students from poorer families, who might otherwise feel embarrassed.\n\nMoreover, uniforms save time and create team spirit. Students do not have to decide what to wear every morning, so getting ready is much faster. When we wear the school colours at competitions, we also feel proud to represent our school.\n\nHowever, I understand that teenagers want to express their personality. Schools could allow students to wear their own clothes on one day each week.\n\nIn conclusion, I believe uniforms should remain part of school life because they promote equality and unity."
 },
 {
  "id": "es3",
  "stage": "essay",
  "lv": "B1",
  "type": "write",
  "title": "Bài kể chuyện: một ngày không thể quên",
  "task": "Viết một câu chuyện (150–180 từ) bắt đầu bằng câu: \"I knew it was going to be a special day as soon as I woke up.\"",
  "words": [
   150,
   180
  ],
  "req": [
   "Bắt đầu đúng bằng câu cho sẵn",
   "Dùng đúng các thì quá khứ (đơn, tiếp diễn, hoàn thành)",
   "Có ít nhất 3 từ chỉ trình tự (then, after that, finally…)",
   "Có lời thoại hoặc miêu tả cảm xúc",
   "Có kết thúc rõ ràng"
  ],
  "outline": [
   "Mở: chi tiết khi thức dậy cho thấy ngày đặc biệt",
   "Diễn biến: sự kiện chính, có một bất ngờ",
   "Cao trào: khoảnh khắc đáng nhớ",
   "Kết: cảm xúc, ý nghĩa"
  ],
  "model": "I knew it was going to be a special day as soon as I woke up. The smell of my grandmother's cooking was coming from the kitchen, and she only cooked like that when someone important was visiting.\n\nAfter breakfast, my mother told me to put on my best shirt. I was confused because nobody had mentioned any guests. Then, at about ten o'clock, I heard a car stop outside. When I opened the door, I could not believe my eyes. My uncle, who had been working in Japan for five years, was standing there with a huge smile.\n\n\"You've grown so tall!\" he laughed as he hugged me.\n\nWe spent the whole afternoon looking at his photos and listening to his stories about life abroad. Finally, before I went to bed, he gave me a small notebook and said, \"Write down your dreams. Then go and chase them.\"\n\nI still keep that notebook on my desk today."
 },
 {
  "id": "es4",
  "stage": "essay",
  "lv": "B2",
  "type": "write",
  "title": "Bài luận quan điểm: mạng xã hội và tuổi teen",
  "task": "\"Mạng xã hội gây hại cho thanh thiếu niên nhiều hơn lợi ích.\" Bạn đồng ý đến mức nào? Viết bài luận 250–280 từ.",
  "words": [
   250,
   280
  ],
  "req": [
   "Mở bài: paraphrase đề và nêu quan điểm rõ ràng",
   "Mỗi đoạn thân bài có câu chủ đề, giải thích và ví dụ",
   "Có đoạn nhượng bộ – phản bác",
   "Đa dạng cấu trúc: mệnh đề quan hệ, bị động, câu điều kiện, cụm phân từ",
   "Từ nối học thuật (Furthermore, Nevertheless, Consequently)",
   "Kết bài tổng kết, không thêm ý mới"
  ],
  "outline": [
   "Mở: mạng xã hội phổ biến; quan điểm: đồng ý phần lớn",
   "Thân 1: ảnh hưởng tới sức khoẻ tinh thần (so sánh bản thân, áp lực ngoại hình)",
   "Thân 2: mất tập trung, giấc ngủ, kết quả học tập",
   "Thân 3 (nhượng bộ): kết nối, học tập, nhưng lợi ích phụ thuộc cách dùng",
   "Kết: tác hại lớn hơn nếu không có hướng dẫn; cần giáo dục kỹ năng số"
  ],
  "model": "Social media has become an inseparable part of teenage life, with most young Vietnamese spending several hours a day on platforms such as TikTok and Facebook. While these apps offer some genuine benefits, I largely agree that their harmful effects on adolescents outweigh the advantages.\n\nThe most serious concern is the impact on mental health. Constantly exposed to carefully edited images of their peers, many teenagers begin to compare their own appearance and lifestyle unfavourably. Consequently, feelings of anxiety and low self-esteem have become increasingly common among students.\n\nFurthermore, social media is designed to capture attention for as long as possible. Endless scrolling not only reduces the time available for homework but also delays sleep, which is essential for concentration. If a student checks notifications late into the night, their performance in class the next day is likely to suffer.\n\nNevertheless, it would be unfair to ignore the positive side. Social media allows young people to stay in touch with friends, join communities that share their interests, and even access free educational content. However, these benefits depend largely on how the platforms are used, and most teenagers have not been taught to use them critically.\n\nIn conclusion, although social media can connect and inform, its effects on mental health and study habits make it more harmful than beneficial for teenagers at present. Rather than banning it, schools and parents should teach digital skills so that young people can enjoy its advantages without paying such a high price."
 },
 {
  "id": "es5",
  "stage": "essay",
  "lv": "B2",
  "type": "write",
  "title": "Bài luận thảo luận: du học hay học trong nước",
  "task": "Một số người cho rằng du học mang lại nhiều cơ hội hơn; người khác tin rằng học đại học trong nước là lựa chọn hợp lý hơn. Thảo luận cả hai quan điểm và nêu ý kiến của bạn (250–280 từ).",
  "words": [
   250,
   280
  ],
  "req": [
   "Trình bày công bằng cả hai quan điểm",
   "Nêu ý kiến cá nhân rõ ràng (ở mở bài hoặc kết bài)",
   "Dùng cấu trúc đối chiếu (whereas, on the other hand)",
   "Có so sánh với từ nhấn mạnh và cấu trúc the … the …",
   "Có ít nhất 1 câu bị động và 1 mệnh đề rút gọn"
  ],
  "outline": [
   "Mở: giới thiệu tranh luận; quan điểm: tuỳ mục tiêu, nghiêng về học trong nước bậc cử nhân",
   "Thân 1: lợi ích du học (ngoại ngữ, môi trường quốc tế, độc lập)",
   "Thân 2: lợi ích học trong nước (chi phí, gia đình, mạng lưới quan hệ, chất lượng ngày càng tốt)",
   "Kết: học trong nước + trao đổi/thạc sĩ ở nước ngoài"
  ],
  "model": "As more Vietnamese families can afford international education, the question of whether to study abroad or at home has become a common dilemma. Both options have clear merits, but I believe that for most students, completing a first degree at home is the wiser choice.\n\nThose in favour of studying abroad argue that it offers unique opportunities. Living in another country, students are forced to use a foreign language every day, which improves their fluency far faster than classes ever could. They also learn to manage money and solve problems independently, and a degree from a well-known university is often valued by international employers.\n\nOn the other hand, studying at home has significant advantages. The cost is much lower, as tuition and living expenses abroad can be ten times higher. Students remain close to their families during a period that can be emotionally challenging, and they build professional networks in the country where they are most likely to work. Moreover, the quality of Vietnamese universities has improved considerably, and many programmes are now taught in English or offered jointly with foreign partners.\n\nIn my view, the decision should depend on each student's goals and finances. However, the more mature a student is, the more they will gain from an experience overseas. For this reason, I would recommend completing a bachelor's degree at home and then studying abroad through an exchange programme or a master's course.\n\nIn conclusion, while studying abroad broadens horizons, studying at home is more affordable and practical, and combining the two may offer the best of both worlds."
 },
 {
  "id": "es6",
  "stage": "essay",
  "lv": "B2",
  "type": "write",
  "title": "Bài luận vấn đề – giải pháp: ùn tắc giao thông",
  "task": "Ùn tắc giao thông ở Hà Nội và TP.HCM ngày càng nghiêm trọng. Nêu nguyên nhân và đề xuất giải pháp (250–280 từ).",
  "words": [
   250,
   280
  ],
  "req": [
   "Mở bài nêu vấn đề và cấu trúc bài",
   "Đoạn nguyên nhân có ít nhất 2 nguyên nhân",
   "Đoạn giải pháp có ít nhất 2 giải pháp khả thi kèm hệ quả",
   "Có câu bị động, câu điều kiện và mệnh đề chỉ mục đích (so that / in order to)",
   "Từ nối nguyên nhân – kết quả"
  ],
  "outline": [
   "Mở: thực trạng; bài sẽ phân tích nguyên nhân và giải pháp",
   "Nguyên nhân: số lượng xe cá nhân tăng nhanh, hạ tầng và quy hoạch chưa theo kịp, ý thức giao thông",
   "Giải pháp: phát triển giao thông công cộng (metro, buýt), hạn chế xe cá nhân ở trung tâm, giờ làm linh hoạt",
   "Kết: cần kết hợp chính sách và thay đổi thói quen"
  ],
  "model": "Traffic congestion has become a daily nightmare for residents of Hanoi and Ho Chi Minh City, where a short journey can easily take an hour at rush hour. This essay will examine the main causes of the problem and suggest some practical solutions.\n\nThe most obvious cause is the rapid growth in private vehicles. Millions of motorbikes and an increasing number of cars are registered every year, yet road space has expanded far more slowly. In addition, urban planning has concentrated schools, offices and shopping centres in the same central districts, so most people travel in the same direction at the same time. Poor driving habits, such as running red lights or parking on pavements, make the situation even worse.\n\nSeveral measures could ease the pressure. First, public transport must be made faster and more reliable so that commuters have a real alternative. If the metro lines are completed and connected to frequent feeder buses, many people will leave their motorbikes at home. Second, the city could introduce charges for private vehicles entering the busiest areas at peak times, as has been done successfully in Singapore. Finally, companies and schools could adopt flexible starting times in order to spread traffic more evenly throughout the morning.\n\nIn conclusion, congestion in Vietnam's major cities is caused by the rapid growth of private transport and unbalanced urban development. Only by combining better public transport with policies that discourage unnecessary car and motorbike use can the authorities make the roads move again."
 },
 {
  "id": "es7",
  "stage": "essay",
  "lv": "C1",
  "type": "write",
  "title": "Bài luận nghị luận: AI trong giáo dục",
  "task": "\"Trí tuệ nhân tạo là mối đe doạ đối với giáo dục hơn là một cơ hội.\" Thảo luận (320–360 từ).",
  "words": [
   320,
   360
  ],
  "req": [
   "Lập luận có chiều sâu, quan điểm tinh tế (không chỉ đồng ý hay phản đối)",
   "Có ít nhất 2 câu đảo ngữ hoặc câu chẻ dùng tự nhiên",
   "Có ngôn ngữ rào đón và đánh giá (arguably, to a large extent)",
   "Danh từ hoá và từ vựng học thuật",
   "Liên kết giữa các đoạn chặt chẽ, dùng từ quy chiếu",
   "Kết bài có tổng hợp và gợi ý"
  ],
  "outline": [
   "Mở: AI đã vào lớp học; luận điểm: rủi ro có thật nhưng phụ thuộc cách dạy và cách đánh giá",
   "Thân 1: mối đe doạ (gian lận, phụ thuộc, suy giảm tư duy độc lập)",
   "Thân 2: cơ hội (cá nhân hoá, phản hồi tức thì, giải phóng thời gian giáo viên)",
   "Thân 3: điều kiện để thành cơ hội (đổi cách đánh giá, dạy AI literacy)",
   "Kết: AI không quyết định kết quả, con người quyết định"
  ],
  "model": "Within just a few years, artificial intelligence has moved from science fiction into the ordinary classroom, where students can now generate essays, solve equations and translate texts in seconds. Unsurprisingly, many teachers regard this development as a threat to learning itself. While their concerns are well founded, I would argue that whether AI becomes a threat or an opportunity depends far less on the technology than on how schools choose to respond.\n\nThe dangers are real. When a chatbot can produce a competent essay on demand, the temptation to outsource thinking is considerable, particularly for students under exam pressure. Over time, such dependence may erode precisely the skills education is meant to develop: the ability to structure an argument, to tolerate uncertainty and to learn from one's own mistakes. Nor is the problem limited to cheating; uncritical users may also absorb errors and biases that AI systems present with misleading confidence.\n\nYet to focus solely on these risks would be to overlook AI's remarkable potential. Rarely has a tool been able to offer every learner a patient, personalised tutor. A student struggling with the passive voice at midnight can receive tailored explanations and practice; a teacher freed from routine marking can devote more time to discussion and individual support. For learners in remote areas, where qualified teachers are scarce, the benefits could be transformative.\n\nWhat ultimately determines the outcome is assessment. As long as schools continue to reward the final product rather than the process, AI will inevitably be used as a shortcut. If, however, students are asked to critique AI-generated answers, explain their reasoning orally or document how their work evolved, the technology becomes a partner in learning rather than a substitute for it. Equally important is teaching AI literacy, so that students understand both what these systems can do and where they fail.\n\nIn conclusion, AI poses a genuine threat only to an education system that refuses to change. Used thoughtfully, it is arguably the greatest opportunity for personalised learning in a generation, and it is up to educators, not machines, to decide which of these futures arrives."
 },
 {
  "id": "es8",
  "stage": "essay",
  "lv": "C1",
  "type": "write",
  "title": "Đề xuất: cải tạo thư viện trường",
  "task": "Ban giám hiệu muốn nghe ý kiến học sinh về việc cải tạo thư viện trường. Viết một bản đề xuất (proposal) trang trọng, 300–340 từ, có tiêu đề cho từng phần: Introduction, Current situation, Recommendations, Conclusion.",
  "words": [
   300,
   340
  ],
  "req": [
   "Đúng định dạng proposal, có tiêu đề cho từng phần",
   "Văn phong trang trọng, khách quan",
   "Có câu bị động và ngôn ngữ đề xuất (It is recommended that / should be)",
   "Có số liệu hoặc bằng chứng (khảo sát)",
   "Đề xuất cụ thể, khả thi, có lý do"
  ],
  "outline": [
   "Introduction: mục đích đề xuất, nguồn thông tin (khảo sát 200 học sinh)",
   "Current situation: ít người dùng, sách cũ, thiếu chỗ học nhóm, giờ mở cửa ngắn",
   "Recommendations: khu học nhóm, sách và tài liệu số, mở cửa muộn hơn, câu lạc bộ đọc",
   "Conclusion: lợi ích dự kiến, đề nghị thực hiện"
  ],
  "model": "Introduction\nThe purpose of this proposal is to recommend ways of making the school library more useful to students. It is based on a survey of 200 students from all three grades, conducted in October.\n\nCurrent situation\nAlthough the library is located in the centre of the school, it is used by relatively few students. Only 18% of those surveyed said they visit it at least once a week. The main reasons given were the outdated collection, the lack of space for group work and the short opening hours: the library currently closes at 4.30 p.m., immediately after classes end. In addition, several students mentioned that the room is too hot in summer.\n\nRecommendations\nFirst, it is recommended that part of the reading room be converted into a group study area with movable tables and a whiteboard. Many students reported that they have nowhere at school to prepare presentations together.\nSecond, the collection should be updated. Instead of buying large numbers of printed textbooks, the school could subscribe to a digital library, giving students access to e-books and practice tests on their own devices.\nThird, the opening hours should be extended until 6 p.m. on weekdays. This would allow students who stay for extra classes or sports to use the space.\nFinally, a student-led reading club could be established to organise book talks and competitions, which would encourage more regular visits at little cost.\n\nConclusion\nIf these changes are implemented, the library is likely to become a lively centre for independent and collaborative learning rather than a rarely visited room. Most of the recommendations require only modest investment, and the student council would be willing to help put them into practice. It is therefore hoped that the school management will consider them for the next academic year."
 },
 {
  "id": "es9",
  "stage": "essay",
  "lv": "C1",
  "type": "write",
  "title": "Bài luận nghị luận: học nghề và bằng đại học",
  "task": "\"Đào tạo nghề có giá trị ngang với một tấm bằng đại học.\" Bạn đồng ý đến mức nào? (320–360 từ)",
  "words": [
   320,
   360
  ],
  "req": [
   "Quan điểm rõ ràng, có giới hạn hợp lý",
   "Có ít nhất 2 cấu trúc nhấn mạnh (đảo ngữ, câu chẻ, Not only)",
   "Có phản biện quan điểm đối lập",
   "Dùng bằng chứng hoặc ví dụ cụ thể",
   "Đa dạng từ vựng học thuật, tránh lặp từ",
   "Kết bài tổng hợp"
  ],
  "outline": [
   "Mở: định kiến xã hội; quan điểm: đồng ý phần lớn, xét theo giá trị kinh tế và cá nhân",
   "Thân 1: nhu cầu thị trường, thu nhập, thời gian ra trường",
   "Thân 2: giá trị cá nhân, phù hợp năng lực",
   "Thân 3 (phản biện): đại học cần cho một số ngành và cho tư duy rộng; nhưng không phải con đường duy nhất",
   "Kết: thay đổi định kiến, liên thông giữa hai hệ"
  ],
  "model": "In Vietnam, a university degree has long been regarded as the only respectable route to a successful career, while vocational training is often seen as a fallback for weaker students. I would argue, however, that in today's economy vocational qualifications are, in most respects, just as valuable as academic degrees.\n\nThe strongest evidence comes from the labour market itself. Employers in manufacturing, construction, tourism and technology consistently report shortages of skilled technicians, electricians and chefs, and many of these positions now pay as much as entry-level office work. Not only do vocational graduates find jobs relatively quickly, but they also begin earning two or three years earlier than their university-educated peers, and without the burden of four years' tuition fees.\n\nEqually important is the question of personal fit. Not every young person learns best by reading and writing essays. Many thrive when they can work with their hands, see the tangible results of their effort and master a craft step by step. It is precisely these learners who are often failed by an education system that values academic performance above everything else, and for them a vocational pathway can offer both competence and self-respect.\n\nThis is not to deny that universities remain indispensable. Professions such as medicine, law and engineering require theoretical knowledge that cannot be acquired on a short course, and a university education also develops broad analytical skills that are useful in a rapidly changing world. Yet these advantages justify the existence of universities, not the assumption that they suit everyone.\n\nIn conclusion, while degrees are essential for certain careers, vocational training is equally valuable in terms of employability, income and personal fulfilment. Only when society stops ranking the two paths and starts valuing each on its own merits will young people be free to choose the education that genuinely suits them."
 }
];
