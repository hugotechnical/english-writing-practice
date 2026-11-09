/* Thang luyện viết — lý thuyết ngữ pháp cho từng nhóm bài.
   Mỗi thẻ: sum (tóm tắt), sections [{h, p, list, ex, table:{head, rows}}], mistakes [[sai, đúng, vì sao]] */
window.GRAMMAR = {
ph1:{title:'Từ loại và vị trí trong câu', sum:'Muốn điền đúng dạng từ, xác định vị trí trước, rồi chọn hậu tố.', sections:[
 {h:'Vị trí của từng loại từ', list:[
  '<b>Danh từ</b>: sau mạo từ / tính từ sở hữu / tính từ (a <u>decision</u>, their <u>development</u>), làm chủ ngữ hoặc tân ngữ.',
  '<b>Tính từ</b>: trước danh từ (a <u>successful</u> business) hoặc sau động từ nối be, become, seem, look, feel, remain (It became <u>popular</u>).',
  '<b>Trạng từ</b>: bổ nghĩa cho động từ (work <u>hard</u>, speak <u>clearly</u>), tính từ (<u>environmentally</u> friendly), trạng từ khác (<u>very</u> quickly) hoặc cả câu (<u>Unfortunately</u>, …).',
  '<b>Động từ</b>: sau chủ ngữ, sau to, sau động từ khuyết thiếu (can <u>improve</u>).']},
 {h:'Hậu tố nhận diện', table:{head:['Loại từ','Hậu tố thường gặp','Ví dụ'], rows:[
  ['Danh từ','-tion/-sion, -ment, -ness, -ity, -ance/-ence, -ship, -ism','pollution, development, awareness, ability, independence'],
  ['Danh từ chỉ người','-er/-or, -ist, -ant/-ent, -ee','employer, scientist, assistant, employee'],
  ['Tính từ','-ful, -less, -ous, -ive, -able/-ible, -al, -ic, -y','harmful, dangerous, effective, reliable, economic'],
  ['Động từ','-ize/-ise, -en, -ify, -ate','modernise, strengthen, simplify, motivate'],
  ['Trạng từ','tính từ + -ly','effectively, significantly']]}},
 {h:'Tiền tố đổi nghĩa', list:['Phủ định: un- (unexpected), in-/im-/il-/ir- (inaccurate, impossible, illegal, irresponsible), dis- (disagree), non- (non-renewable).','mis- = làm sai (misunderstand), over- = quá mức (overuse), under- = dưới mức (underestimate), re- = làm lại (rebuild).']},
 {h:'Cặp từ dễ nhầm trong bài viết', table:{head:['Từ','Nghĩa'], rows:[
  ['economic / economical','thuộc kinh tế / tiết kiệm'],['historic / historical','có ý nghĩa lịch sử / thuộc về lịch sử'],
  ['sensible / sensitive','hợp lý / nhạy cảm'],['considerable / considerate','đáng kể / chu đáo'],['successful / successive','thành công / liên tiếp']]}}],
 mistakes:[['a success business','a successful business','Trước danh từ cần tính từ.'],['environmental friendly products','environmentally friendly products','Bổ nghĩa cho tính từ friendly phải là trạng từ.'],['economical growth','economic growth','Tăng trưởng kinh tế, không phải "tiết kiệm".']]},

ph2:{title:'V-ing hay to V', sum:'Động từ đứng sau quyết định dạng của động từ theo sau; một số động từ đổi nghĩa.', sections:[
 {h:'Nhóm + V-ing', p:'avoid, enjoy, finish, mind, consider, suggest, recommend, deny, admit, practise, keep, risk, miss, delay, postpone, involve, can\'t help, can\'t stand.', ex:['Many students avoid <u>asking</u> questions in class.']},
 {h:'Nhóm + to V', p:'decide, plan, hope, want, expect, agree, refuse, promise, manage, fail, afford, offer, seem, tend, learn, aim, attempt.', ex:['The government plans <u>to build</u> more schools.']},
 {h:'Động từ + tân ngữ + to V', p:'ask, tell, allow, encourage, advise, persuade, invite, remind, force, enable, require, warn.', ex:['Technology enables students <u>to learn</u> at their own pace.']},
 {h:'Động từ đổi nghĩa', table:{head:['Động từ','+ V-ing','+ to V'], rows:[
  ['remember / forget','nhớ / quên việc đã làm','nhớ / quên việc phải làm'],['stop','thôi, bỏ hẳn việc đó','dừng việc khác để làm việc này'],
  ['try','thử làm (xem kết quả)','cố gắng làm'],['regret','hối hận vì đã làm','lấy làm tiếc phải (thông báo)'],['mean','có nghĩa là','định làm']]}},
 {h:'Quy tắc cần nhớ', list:['Sau giới từ luôn là V-ing: interested in <u>learning</u>, instead of <u>driving</u>.','to là giới từ trong: look forward to, be/get used to, object to, be committed to, when it comes to, contribute to → + V-ing.','make / let / have + tân ngữ + V nguyên mẫu; would rather / had better + V nguyên mẫu.']}],
 mistakes:[['I look forward to meet you.','I look forward to meeting you.','to là giới từ.'],['She suggested to go by bus.','She suggested going by bus. / She suggested that we go by bus.','suggest không đi với to V.'],['Parents should let children to choose.','Parents should let children choose.','let + O + V nguyên mẫu.']]},

ph3:{title:'Giới từ đi kèm', sum:'Trong bài viết, giới từ sai là lỗi bị trừ điểm nhiều nhất. Hãy học theo cụm.', sections:[
 {h:'Tính từ + giới từ', p:'interested in, good at, afraid of, aware of, responsible for, famous for, keen on, similar to, different from, capable of, proud of, dependent on, essential for/to.'},
 {h:'Động từ + giới từ', p:'depend on, rely on, focus on, consist of, result in (dẫn đến), result from (do… gây ra), apply for (xin) / apply to (áp dụng), succeed in, contribute to, deal with, cope with, benefit from, invest in, approve of.'},
 {h:'Danh từ + giới từ (rất hay dùng trong luận)', table:{head:['Cụm','Ví dụ'], rows:[
  ['an impact / effect / influence on','the impact of social media on teenagers'],['a solution to','a solution to traffic congestion'],
  ['an increase / decrease / rise / fall in','a sharp rise in house prices'],['access to','access to clean water'],
  ['demand for / need for','growing demand for skilled workers'],['the cause of / a reason for','the main cause of pollution'],['an attitude towards','attitudes towards vocational training']]}},
 {h:'Cụm cố định', p:'in charge of, on behalf of, in terms of, by means of, in spite of, as a result of, at risk of, in favour of, in addition to, with regard to.'},
 {h:'Động từ không có giới từ', p:'discuss, emphasise, consider, approach, enter, affect, reach, attend (tham dự) — không thêm about/on/to.'}],
 mistakes:[['discuss about the problem','discuss the problem','discuss là ngoại động từ.'],['an increase of prices','an increase in prices','Mức tăng của một đại lượng dùng in.'],['result to','result in','Không có "result to".'],['have access into','have access to','Cụm cố định.']]},

ph4:{title:'Lượng từ', sum:'Chọn lượng từ theo danh từ đếm được hay không đếm được, và theo mức trang trọng.', sections:[
 {h:'Bảng lượng từ', table:{head:['Đếm được số nhiều','Không đếm được','Cả hai'], rows:[
  ['many, a large/great number of, (a) few, several, a great many','much, a great deal of, a large amount of, (a) little','a lot of, lots of, plenty of, some, any, most, all, no']]}},
 {h:'few / a few, little / a little', list:['few, little = rất ít, gần như không (nghĩa tiêu cực): Few people understand the risk.','a few, a little = một vài, một chút (đủ dùng): A few students volunteered.']},
 {h:'Hoà hợp với động từ', list:['each / every + danh từ số ít + động từ số ít: Every student has a laptop.','a number of + N số nhiều + V số nhiều; the number of + N số nhiều + V số ít.','neither of / either of + N số nhiều: động từ số ít (trang trọng).','most + N (nói chung) / most of the + N (nhóm xác định).']},
 {h:'Lượng từ trong so sánh', list:['much / far / a lot / considerably + so sánh hơn: much easier, far more expensive.','many more + N số nhiều: many more students; much more + N không đếm được: much more time.','fewer + N số nhiều; less + N không đếm được: fewer cars, less traffic.']},
 {h:'Mẹo cho bài viết trang trọng', p:'Thay a lot of bằng a large number of / a great deal of / a considerable amount of / numerous / substantial.'}],
 mistakes:[['a large amount of people','a large number of people','people đếm được.'],['less students','fewer students','students đếm được.'],['much more books','many more books','books đếm được số nhiều.'],['The number of students are rising.','The number of students is rising.','Chủ ngữ là "the number".']]},

ph5:{title:'Trật tự tính từ và danh từ ghép', sum:'Nhiều tính từ trước danh từ đi theo thứ tự cố định; danh từ đứng trước trong danh từ ghép thường ở số ít.', sections:[
 {h:'Thứ tự tính từ (OSASCOMP)', p:'Opinion (ý kiến) → Size → Age → Shape → Colour → Origin → Material → Purpose + Noun.', ex:['a <u>beautiful old wooden</u> table','a <u>small Japanese</u> car','<u>delicious traditional Vietnamese</u> food']},
 {h:'Danh từ ghép', list:['Danh từ đứng trước làm chức năng tính từ và thường ở số ít: a bus stop, a book shop, a ticket office.','Ngoại lệ hay gặp: sports car, sales department, savings account, clothes shop, arms trade.']},
 {h:'Tính từ ghép có số đếm', list:['số + danh từ số ít, nối bằng gạch ngang: a ten-year-old boy, a two-hour meeting, a five-star hotel.','So sánh: The boy is ten years old. (sau động từ, danh từ ở số nhiều, không gạch nối)']},
 {h:'Dấu phẩy giữa các tính từ', p:'Tính từ cùng loại (ngang hàng) thì ngăn bằng dấu phẩy hoặc and: a cold, wet day; a long and difficult process. Tính từ khác nhóm thì không có dấu phẩy: a beautiful old house. Cách kiểm tra: đảo thứ tự hoặc chèn and vẫn tự nhiên thì dùng dấu phẩy.'}],
 mistakes:[['a wooden old beautiful table','a beautiful old wooden table','Sai thứ tự.'],['a ten-years-old boy','a ten-year-old boy','Danh từ trong tính từ ghép ở số ít.'],['a three hours journey','a three-hour journey','Như trên.']]},

ph6:{title:'Cụm động từ', sum:'Cụm động từ làm bài viết tự nhiên hơn, nhưng văn trang trọng nên dùng động từ đơn tương đương.', sections:[
 {h:'Tách được hay không', list:['Tách được: put off the meeting / put the meeting off / put <u>it</u> off (đại từ bắt buộc đứng giữa).','Không tách: look after them, come across it, deal with it.','Ba thành phần (không tách): put up with, look forward to, catch up with, run out of, come up with, cut down on, fall back on.']},
 {h:'Nhóm theo chức năng trong bài luận', table:{head:['Chức năng','Cụm động từ'], rows:[
  ['Tăng / giảm','go up, go down, cut down on, bring down, build up'],['Giải quyết, thực hiện','deal with, come up with, carry out, set up, figure out, sort out'],
  ['Khó khăn','put up with, cope with, run out of, fall back on, break down, give up'],['Quan hệ','get on with, look up to, let down, bring up (nuôi dạy)']]}},
 {h:'Thay bằng động từ trang trọng', table:{head:['Thân mật','Trang trọng'], rows:[
  ['find out','discover'],['put off','postpone'],['set up','establish'],['cut down on','reduce'],['go up','increase'],['look into','investigate'],['carry on','continue'],['get rid of','eliminate']]}}],
 mistakes:[['put off it','put it off','Đại từ đứng giữa.'],['had no choice but fell back on','had no choice but to fall back on','had no choice but + to V.'],['The price went up dramatically. (bài luận C1)','The price increased dramatically.','Văn học thuật ưu tiên động từ đơn.']]},

ph7:{title:'So sánh', sum:'So sánh là công cụ chính khi mô tả số liệu và đối chiếu hai lựa chọn.', sections:[
 {h:'Ba cấp so sánh', list:['Bằng: as + adj/adv + as; not as/so … as; the same (N) as.','Hơn: adj-er / more adj + than; nhất: the adj-est / the most adj.','Bất quy tắc: good-better-best, bad-worse-worst, little-less-least, much/many-more-most, far-further/farther-furthest.']},
 {h:'So sánh bội số', ex:['Rents are <u>twice as high as</u> they were in 2015.','The new park is <u>three times the size of</u> the old one.','Women earn <u>about half as much as</u> men in this sector.']},
 {h:'So sánh kép', list:['The + so sánh hơn …, the + so sánh hơn …: The more you read, the better you write.','Càng ngày càng: more and more expensive, bigger and bigger.']},
 {h:'Từ nhấn mạnh', list:['Hơn rất nhiều: much / far / a lot / considerably / significantly + so sánh hơn.','Hơn một chút: slightly / a little + so sánh hơn.','Nhất, hơn hẳn: by far + so sánh nhất (by far the most popular).']}],
 mistakes:[['more cheaper','cheaper','Không dùng hai dấu hiệu so sánh.'],['very better','much better','very không đi với so sánh hơn.'],['The more you practise, you become more fluent.','The more you practise, the more fluent you become.','Hai vế đều bắt đầu bằng the + so sánh hơn.']]},

cl1:{title:'Mệnh đề quan hệ', sum:'Mệnh đề quan hệ giúp gộp hai câu ngắn thành một câu dài, mạch lạc.', sections:[
 {h:'Đại từ và trạng từ quan hệ', table:{head:['Từ','Thay cho','Ví dụ'], rows:[
  ['who','người (chủ ngữ / tân ngữ)','students who study abroad'],['whom','người (tân ngữ, trang trọng)','the expert to whom we spoke'],
  ['which','vật, sự việc; cả mệnh đề phía trước','a policy which reduced traffic'],['that','người hoặc vật, chỉ trong mệnh đề xác định','the book that changed my life'],
  ['whose','sở hữu','a boy whose father is a doctor'],['where / when / why','nơi chốn / thời gian / lý do','the city where I grew up']]}},
 {h:'Xác định và không xác định', list:['Xác định: cần để biết là ai, cái gì; không có dấu phẩy; dùng được that; bỏ được đại từ khi nó làm tân ngữ (the book (that) I read).','Không xác định: thông tin thêm; có dấu phẩy; không dùng that; không bỏ đại từ: Hanoi, which is the capital, …']},
 {h:'Giới từ trong mệnh đề quan hệ', list:['Trang trọng: the person to whom I spoke, the reason for which he left.','Thân mật: the person (who) I spoke to.','Không dùng giới từ trước that hoặc who.']},
 {h:'which thay cả mệnh đề', ex:['Many students now study online, <u>which</u> saves them time and money.']},
 {h:'Hoà hợp động từ', p:'Động từ trong mệnh đề quan hệ chia theo danh từ mà đại từ thay thế: families, which <u>use</u> fans… / a fan, which <u>uses</u>…'}],
 mistakes:[['Hanoi, that is the capital, …','Hanoi, which is the capital, …','Mệnh đề không xác định không dùng that.'],['the house where I live in','the house where I live / the house (which) I live in','Không lặp giới từ.'],['The reason why he left is because …','The reason why he left is that …','Tránh lặp nghĩa lý do.']]},

cl2:{title:'Rút gọn mệnh đề quan hệ', sum:'Rút gọn giúp câu gọn và tự nhiên hơn, nhưng chỉ dùng khi nghĩa không đổi.', sections:[
 {h:'Các cách rút gọn', table:{head:['Mệnh đề gốc','Rút gọn','Ví dụ'], rows:[
  ['who/which + V chủ động (đang diễn ra, thường xuyên)','V-ing','People living in cities face more stress.'],
  ['who/which + be + P2 (bị động)','P2','The bridge built in 1902 is still in use.'],
  ['the first / last / only / so sánh nhất + who …','to V','She was the first woman to win the prize.'],
  ['which/who + be + cụm danh từ','ngữ đồng vị','Hue, the former capital, attracts many tourists.'],
  ['which/who + be + cụm giới từ / tính từ','giữ cụm đó','The students in the back row … / a job suitable for graduates']]}},
 {h:'Khi nào không rút gọn được', list:['Hành động đơn lẻ đã hoàn tất trong quá khứ: the man who stole my bike (không viết "the man stealing my bike").','Mệnh đề có chủ ngữ riêng: the book (that) I bought.']}],
 mistakes:[['The man stealing my bike has been arrested.','The man who stole my bike has been arrested.','"stealing" gợi ý đang lấy trộm.'],['Products making in Vietnam','Products made in Vietnam','Nghĩa bị động phải dùng P2.']]},

cl3:{title:'Mệnh đề trạng ngữ và liên từ', sum:'Liên từ quyết định quan hệ logic giữa hai ý; chọn sai liên từ là sai lập luận.', sections:[
 {h:'Liên từ theo chức năng', table:{head:['Quan hệ','+ mệnh đề','+ danh từ / V-ing'], rows:[
  ['Nguyên nhân','because, since, as','because of, due to, owing to'],['Nhượng bộ','although, though, even though, while, whereas (đối lập)','despite, in spite of (+ the fact that + mệnh đề)'],
  ['Mục đích','so that + can/could/will/would','in order to / so as to + V'],['Kết quả','so + adj/adv + that; such (a) + adj + N + that','—'],
  ['Thời gian','when, while, as soon as, before, after, until, by the time, once','before / after / since + V-ing'],['Điều kiện','if, unless, as long as, provided that, in case (phòng khi)','in case of, without']]}},
 {h:'Quy tắc cần nhớ', list:['Mệnh đề thời gian chỉ tương lai dùng hiện tại, không dùng will: I will call you when I arrive.','Không dùng although … but hoặc because … so trong cùng một câu.','Mệnh đề phụ đứng đầu câu thì đặt dấu phẩy sau nó: Although it was raining, we went out.','Sau before / after, quá khứ đơn là đủ vì liên từ đã cho biết trình tự; quá khứ hoàn thành không bắt buộc.']}],
 mistakes:[['Although it rained, but we went out.','Although it rained, we went out.','Một liên từ là đủ.'],['Despite it rained, …','Despite the rain, … / Although it rained, …','despite không đi với mệnh đề.'],['I\'ll call you when I will arrive.','I\'ll call you when I arrive.','Không dùng will trong mệnh đề thời gian.']]},

cl4:{title:'Rút gọn mệnh đề trạng ngữ', sum:'Phân từ đầu câu là dấu hiệu bài viết B2–C1, nhưng chỉ đúng khi hai vế cùng chủ ngữ.', sections:[
 {h:'Điều kiện bắt buộc', p:'Chủ ngữ của mệnh đề chính cũng phải là người hoặc vật thực hiện hành động trong cụm rút gọn.'},
 {h:'Các dạng', table:{head:['Nghĩa','Dạng','Ví dụ'], rows:[
  ['Chủ động, cùng lúc','V-ing','Walking home, I saw an accident.'],['Chủ động, xảy ra trước','Having + P2 / After + V-ing','Having finished his homework, he went out.'],
  ['Bị động','P2 / Being + P2 / Having been + P2','Asked to stay late, she missed the bus.'],['Phủ định','Not + V-ing','Not knowing the answer, he kept silent.'],
  ['Giữ liên từ cho rõ nghĩa','when / while / before / after / although / if + V-ing / P2','Although built long ago, the house is solid.']]}},
 {h:'Lỗi chủ ngữ treo', p:'"Walking into the room, the lights went off." sai vì đèn không thể đi vào phòng. Sửa: As I walked into the room, the lights went off.'}],
 mistakes:[['Having finished the test, the bell rang.','Having finished the test, we heard the bell ring. / When we had finished the test, the bell rang.','Chủ ngữ treo.'],['Being asked … là sai','Being asked to stay late, she missed the bus.','Being + P2 là dạng hợp lệ (trang trọng).']]},

cl5:{title:'Câu điều kiện', sum:'Câu điều kiện là công cụ chính để nêu hệ quả, giả định và đề xuất trong bài luận.', sections:[
 {h:'Các loại', table:{head:['Loại','Mệnh đề if','Mệnh đề chính','Dùng khi'], rows:[
  ['0','hiện tại đơn','hiện tại đơn','sự thật, quy luật'],['1','hiện tại đơn','will / can / may + V','có thể xảy ra'],
  ['2','quá khứ đơn (were)','would / could / might + V','trái hiện tại, giả định'],['3','quá khứ hoàn thành','would / could / might have + P2','trái quá khứ'],
  ['Hỗn hợp','quá khứ hoàn thành','would + V (now)','quá khứ ảnh hưởng hiện tại']]}},
 {h:'Từ thay cho if', list:['unless = if … not: Unless we act now, …','as long as / provided (that) / on condition that = chỉ khi, miễn là.','in case = phòng khi (khác if): Take an umbrella in case it rains.','suppose / supposing / imagine (giả sử).']},
 {h:'Điều kiện ẩn', list:['without / but for + N: Without your help, I would have failed.','otherwise / or (else): Hurry, otherwise you will be late. (dùng được với cả loại 1)','Câu đề xuất trong luận: If governments invested more in public transport, fewer people would drive.']}],
 mistakes:[['If I will have time, …','If I have time, …','Không dùng will trong mệnh đề if.'],['If I would know, …','If I knew, …','Như trên.'],['Unless you don\'t hurry, …','Unless you hurry, …','unless đã mang nghĩa phủ định.']]},

cl6:{title:'Câu bị động', sum:'Bị động dùng khi tác nhân không quan trọng, trong văn khách quan và khi mô tả quy trình.', sections:[
 {h:'Công thức theo thì', table:{head:['Thì','Bị động'], rows:[
  ['Hiện tại đơn','is/are + P2'],['Hiện tại tiếp diễn','is/are being + P2'],['Hiện tại hoàn thành','has/have been + P2'],['Quá khứ đơn','was/were + P2'],['Tương lai / khuyết thiếu','will / must / should / can be + P2']]}},
 {h:'Bị động tường thuật (rất hay dùng trong luận)', list:['It is said / believed / thought / reported / estimated that + mệnh đề.','S + is said / believed + to V (cùng lúc) / to have + P2 (xảy ra trước) / to be V-ing (đang diễn ra).'], ex:['It is estimated that one third of the population lives in cities.','The fire is believed to have started in the kitchen.']},
 {h:'Trường hợp đặc biệt', list:['see / hear sb V-ing → be seen / heard V-ing: He was seen leaving.','see / hear sb V → be seen / heard to V; make sb V → be made to V.','let → thường dùng be allowed to.','have / get something done: We had the roof repaired.']},
 {h:'Không có bị động', p:'Nội động từ không có bị động: happen, occur, arise, appear, exist, disappear.'}],
 mistakes:[['The accident was happened.','The accident happened.','happen là nội động từ.'],['He is said that he is …','It is said that he is … / He is said to be …','Trộn hai cấu trúc.'],['He was made work overtime.','He was made to work overtime.','Bị động của make cần to.']]},

se1:{title:'Thì và sự phối thì', sum:'Trong bài viết, giữ thì nhất quán quan trọng hơn dùng nhiều thì.', sections:[
 {h:'Thì dùng nhiều nhất trong writing', table:{head:['Thì','Dùng cho','Ví dụ'], rows:[
  ['Hiện tại đơn','sự thật, quan điểm, tình trạng chung','Social media affects teenagers\' sleep.'],['Hiện tại tiếp diễn','xu hướng đang diễn ra','More people are working from home.'],
  ['Hiện tại hoàn thành','thay đổi từ quá khứ đến nay','Online learning has become popular.'],['Quá khứ đơn','mốc thời gian xác định; số liệu quá khứ','In 2020, sales fell by 10%.'],
  ['Quá khứ hoàn thành','việc xảy ra trước một mốc quá khứ','By 2010, the city had built two bridges.'],['Tương lai','dự đoán, dự báo','The figure is expected to rise / will rise.']]}},
 {h:'since, for và các cấu trúc viết lại', list:['since + mốc / for + khoảng thời gian (với thì hoàn thành).','It is / has been + khoảng thời gian + since + quá khứ đơn: It is two years since I last saw him.','This is the first time + hiện tại hoàn thành = S + have never + P2 + before.']},
 {h:'Lùi thì khi tường thuật', list:['Hiện tại → quá khứ; quá khứ / hiện tại hoàn thành → quá khứ hoàn thành; will → would.','Không bắt buộc lùi: chân lý, sự thật vẫn đúng (He said the earth goes round the sun); quá khứ hoàn thành; would / could / should / might; câu điều kiện loại 2 và 3.']}],
 mistakes:[['I have seen him yesterday.','I saw him yesterday.','Có mốc quá khứ thì dùng quá khứ đơn.'],['Since 2020, the number increased.','Since 2020, the number has increased.','since + thì hoàn thành.'],['Every year the number is increasing and increased.','Every year the number increases.','Thì không nhất quán.']]},

se2:{title:'Viết lại câu so sánh', sum:'Biết các cặp chuyển đổi tương đương giúp paraphrase linh hoạt.', sections:[
 {h:'Các cặp tương đương', table:{head:['Câu gốc','Viết lại'], rows:[
  ['No one in the class is taller than Nam.','Nam is the tallest (student) in the class. / Nam is taller than any other student.'],
  ['This book isn\'t as interesting as that one.','That book is more interesting than this one.'],
  ['I have never seen such a beautiful beach.','This is the most beautiful beach (that) I have ever seen.'],
  ['As it gets colder, I feel sleepier.','The colder it gets, the sleepier I feel.'],
  ['She doesn\'t drive as carefully as her sister.','Her sister drives more carefully than she does.']]}},
 {h:'Paraphrase so sánh trong bài luận', list:['far more effective than / not nearly as effective as','significantly / considerably / marginally higher','by far the most important factor','twice as likely to …']}],
 mistakes:[['Nam is taller than any student in my class.','Nam is taller than any other student in my class.','Nam cũng là một học sinh trong lớp.'],['more better','better / much better','Thừa dấu hiệu so sánh.']]},

se3:{title:'Đảo ngữ câu điều kiện', sum:'Bỏ if và đảo trợ động từ lên trước chủ ngữ: trang trọng, hay gặp trong đề viết lại câu.', sections:[
 {h:'Công thức', table:{head:['Loại','Câu thường','Đảo ngữ'], rows:[
  ['1','If you should need help, …','Should you need help, call me.'],['2 (be)','If I were you, …','Were I you, I would accept.'],
  ['2 (động từ thường)','If you won the lottery, …','Were you to win the lottery, …'],['3','If they had known, …','Had they known, they would have helped.'],
  ['But for / Without','If it weren\'t for the internet, …','Were it not for the internet, …'],['But for (quá khứ)','If it hadn\'t been for his advice, …','Had it not been for his advice, …']]}},
 {h:'Lưu ý', list:['not đứng sau chủ ngữ: Had they not developed … (không viết Hadn\'t they developed).','Sau Should dùng V nguyên mẫu; sau Were + S dùng to V hoặc danh từ / tính từ.']}],
 mistakes:[['Hadn\'t they developed this tool, …','Had they not developed this tool, …','Không dùng dạng rút gọn khi đảo.'],['Should you needed help, …','Should you need help, …','V nguyên mẫu sau Should.'],['Were I know, …','Were I to know, … / Had I known, …','Were + S + to V.']]},

se4:{title:'Đảo ngữ nhấn mạnh', sum:'Cụm phủ định hoặc giới hạn đứng đầu câu thì mệnh đề phía sau phải đảo trợ động từ.', sections:[
 {h:'Cách đảo', list:['Có trợ động từ / modal / be: đảo nó lên trước chủ ngữ (have I seen, can students find, was the air).','Thì đơn với động từ thường: mượn do / does / did (did the city start).']},
 {h:'Các nhóm thường gặp', table:{head:['Nhóm','Ví dụ'], rows:[
  ['Trạng từ phủ định: never, rarely, seldom, hardly ever, little','Rarely have I seen such unity. / Little did I know that …'],
  ['No sooner … than / Hardly (Barely, Scarcely) … when + QKHT','No sooner had he arrived than it started to rain.'],
  ['Not until + mốc / mệnh đề','Not until 2020 did the city start recycling.'],
  ['Only + then / later / in this way / by + V-ing / when / if / after (đảo ở mệnh đề chính)','Only when technology is used wisely can it improve education.'],
  ['Cụm có No: at no time, under no circumstances, in no way, on no account, no longer','Under no circumstances must you open this door.'],
  ['Not only … but also','Not only is AI changing work, but it is also improving healthcare.'],
  ['So + adj + be + S + that / Such + be + N + that','So polluted was the air that … / Such was the power of the storm that …'],
  ['Nowhere','Nowhere can students find a quieter place.'],
  ['Trạng ngữ nơi chốn + V + S (không trợ động từ, không với đại từ)','On the hill stands an ancient tower. / Here comes the bus.']]}},
 {h:'Dùng trong bài viết', p:'Ở trình độ C1, 1–2 câu đảo ngữ đặt ở chỗ cần nhấn mạnh (mở bài, câu kết) là đủ. Dùng quá nhiều sẽ thành gượng.'}],
 mistakes:[['Not until 2020 the city started recycling.','Not until 2020 did the city start recycling.','Thiếu đảo ngữ.'],['Such was the powerful storm that …','Such was the power of the storm that …','Sau Such + be là danh từ.'],['Only when it rains we stay home.','Only when it rains do we stay home.','Đảo ở mệnh đề chính.']]},

se5:{title:'Câu chẻ', sum:'Câu chẻ đưa thông tin quan trọng lên tiêu điểm: rất hữu ích để nhấn mạnh luận điểm.', sections:[
 {h:'It-cleft', list:['It is / was + thành phần nhấn mạnh + that / who + phần còn lại: It was Mai who broke the vase. / It is education that changes lives.','It was not until + thời điểm / mệnh đề + that + S + V: It was not until I read the letter that I realised the truth.']},
 {h:'Wh-cleft', list:['What + S + V + is / was + N / mệnh đề: What I need is a long holiday.','What + S + do / did + is / was + (to) V: What she did was (to) become a singer.','What matters most is …, What worries me is …, All (that) we need is …']},
 {h:'Dùng trong bài luận', ex:['What concerns many parents is the amount of time children spend online.','It is not the technology itself but the way we use it that matters.']}],
 mistakes:[['The reason why … is because …','The reason why … is that …','Lặp nghĩa.'],['What she did was becoming a singer.','What she did was (to) become a singer.','Sau What … did was dùng V nguyên mẫu (có hoặc không to).']]},

se6:{title:'Động từ khuyết thiếu và suy đoán', sum:'Modal giúp nêu mức độ chắc chắn, nghĩa vụ và lời khuyên: nền tảng của văn nghị luận cân bằng.', sections:[
 {h:'Ở hiện tại', table:{head:['Ý nghĩa','Modal'], rows:[
  ['Bắt buộc / cấm','must, have to / mustn\'t'],['Không cần','don\'t have to, needn\'t, don\'t need to'],['Lời khuyên','should, ought to, had better'],
  ['Khả năng','may, might, could'],['Suy luận chắc chắn đúng / chắc chắn không','must / can\'t']]}},
 {h:'Suy đoán và nhận xét về quá khứ', table:{head:['Cấu trúc','Nghĩa'], rows:[
  ['must have + P2','chắc chắn đã'],['can\'t / couldn\'t have + P2','chắc chắn đã không'],['may / might / could have + P2','có lẽ đã'],
  ['should have + P2','lẽ ra nên (nhưng đã không)'],['needn\'t have + P2','đã làm nhưng không cần'],['didn\'t need to + V','không cần (và có lẽ đã không làm)']]}},
 {h:'need', list:['Động từ thường (câu khẳng định): need to V, needs to V.','Động từ khuyết thiếu (phủ định / nghi vấn): needn\'t V, Need I …?']},
 {h:'Ngôn ngữ rào đón (hedging)', p:'Trong bài luận, tránh khẳng định tuyệt đối: may, might, could, is likely to, tends to, it is possible that, arguably.'}],
 mistakes:[['He must forgot the meeting.','He must have forgotten the meeting.','Quá khứ cần have + P2.'],['She needs go now.','She needs to go now.','Câu khẳng định dùng need to V.'],['Social media destroys all teenagers.','Social media can harm many teenagers.','Tránh khẳng định tuyệt đối.']]},

se7:{title:'Liên kết câu, song hành, đồng vị', sum:'Ba công cụ giúp câu văn mạch lạc và tránh lỗi câu cụt, câu dính.', sections:[
 {h:'Trạng từ liên kết và liên từ', list:['Liên từ (and, but, so, because, although) nối hai mệnh đề trong cùng một câu.','Trạng từ liên kết (However, Therefore, Moreover, As a result) đứng đầu câu mới + dấu phẩy, hoặc sau dấu chấm phẩy: The plan was cheap; however, it failed.','Sai: The plan was cheap, however it failed. (lỗi comma splice)']},
 {h:'Phép song hành', p:'Các thành phần nối bằng and / or / but, not only … but also, both … and, either … or, neither … nor, rather than phải cùng dạng.', ex:['She enjoys reading, swimming and hiking.','The policy is not only cheap but also effective.']},
 {h:'Ngữ đồng vị', p:'Cụm danh từ đứng ngay sau danh từ để giải thích, ngăn bằng dấu phẩy. Đây là cách gộp câu gọn nhất.', ex:['Hue, the former capital of Vietnam, attracts many tourists.']},
 {h:'Câu cụt và câu dính', list:['Câu cụt: mệnh đề phụ đứng một mình. "Because he was late." → Because he was late, he missed the bus.','Câu dính: hai mệnh đề độc lập nối bằng dấu phẩy. "It rained, we stayed home." → It rained, so we stayed home. / It rained; we stayed home.']},
 {h:'despite', p:'despite / in spite of + N, V-ing, N + V-ing, hoặc the fact that + mệnh đề: Despite prices rising, … / Despite rising prices, …'}],
 mistakes:[['She likes reading, to swim and go hiking.','She likes reading, swimming and hiking.','Không song hành.'],['Many families use fans, which only moves air.','Many families use fans, which only move air.','which = fans (số nhiều).'],['The plan was cheap, however it failed.','The plan was cheap; however, it failed.','Comma splice.']]}
};

/* Cẩm nang kỹ năng viết */
window.GUIDE = [
{id:'g-process', title:'Quy trình viết 5 bước', lv:'B1–C1', sum:'Bài viết tốt bắt đầu trước khi viết câu đầu tiên. Dành khoảng 10% thời gian lập dàn ý và 10% để soát lỗi.', sections:[
 {h:'1. Phân tích đề', list:['Gạch chân dạng bài: agree/disagree, discuss both views, advantages/disadvantages, problem/solution, cause/effect, email, chart.','Xác định đối tượng đọc (bạn bè, nhà trường, giám khảo) để chọn văn phong.','Đếm số câu hỏi trong đề: trả lời thiếu một phần là mất điểm nội dung.']},
 {h:'2. Tìm ý', list:['Đặt câu hỏi Why? How? What if? cho chủ đề.','Mỗi ý chính cần: lý do + giải thích + ví dụ cụ thể (Việt Nam, trường bạn, số liệu, trải nghiệm).']},
 {h:'3. Lập dàn ý', p:'Chọn 2–3 ý mạnh nhất, mỗi ý một đoạn. Viết sẵn câu chủ đề cho từng đoạn.'},
 {h:'4. Viết', p:'Viết theo dàn ý, ưu tiên rõ ràng và chính xác trước, rồi mới đến câu phức.'},
 {h:'5. Soát lỗi (checklist)', list:['Mỗi câu có chủ ngữ và động từ chia đúng chưa? (hoà hợp chủ – vị)','Thì có nhất quán không?','Mạo từ a/an/the, số ít / số nhiều, giới từ đi kèm.','Dấu phẩy sau trạng từ liên kết và mệnh đề phụ đầu câu; không có câu dính.','Có lặp từ không? Đã đủ số từ chưa?']}]},
{id:'g-sentence', title:'Câu: từ đơn giản đến đa dạng', lv:'B1–B2', sum:'Giám khảo đánh giá cao sự đa dạng cấu trúc câu, miễn là câu đúng.', sections:[
 {h:'Bốn loại câu', table:{head:['Loại','Cấu tạo','Ví dụ'], rows:[
  ['Câu đơn','1 mệnh đề độc lập','Online learning is popular.'],['Câu ghép','2 mệnh đề độc lập + and / but / so / or (hoặc dấu chấm phẩy)','It is cheap, but it requires self-discipline.'],
  ['Câu phức','mệnh đề chính + mệnh đề phụ (because, although, which, if …)','Although it is cheap, it requires self-discipline.'],['Câu phức – ghép','2 mệnh đề độc lập + ít nhất 1 mệnh đề phụ','Students who study online save time, but many struggle to stay focused.']]}},
 {h:'Cách làm câu đa dạng hơn', list:['Mở câu bằng nhiều cách: trạng ngữ, mệnh đề phụ, cụm phân từ, đảo ngữ.','Gộp câu ngắn bằng mệnh đề quan hệ, ngữ đồng vị, cụm phân từ.','Xen kẽ câu ngắn (để nhấn mạnh) với câu dài.']},
 {h:'Ba lỗi câu hay gặp', list:['Câu cụt: "Because it is cheap." → thiếu mệnh đề chính.','Câu dính / comma splice: "It is cheap, it is popular." → dùng and, so, dấu chấm phẩy hoặc tách câu.','Câu quá dài, nhiều and: chia thành 2 câu.']}]},
{id:'g-paragraph', title:'Đoạn văn chuẩn (PEEL)', lv:'B1–C1', sum:'Mỗi đoạn thân bài chỉ phát triển một ý chính, theo khung PEEL.', sections:[
 {h:'Khung PEEL', table:{head:['Phần','Vai trò','Mẫu câu'], rows:[
  ['Point','câu chủ đề nêu ý chính','The main advantage of … is that …'],['Explain','giải thích vì sao, như thế nào','This is because … / As a result, …'],
  ['Example','ví dụ cụ thể','For example, … / In Vietnam, …'],['Link','câu kết nối về luận điểm hoặc sang đoạn sau','Therefore, … / This shows that …']]}},
 {h:'Tính thống nhất', p:'Câu nào không phục vụ câu chủ đề thì bỏ. Một đoạn 80–120 từ là hợp lý cho bài luận 250 từ.'},
 {h:'Ví dụ đoạn PEEL', ex:['<b>P</b> Online learning allows students to study at their own pace. <b>E</b> Instead of following a fixed timetable, learners can pause, repeat and review difficult lessons until they understand them. <b>E</b> For example, a student who struggles with the passive voice can watch the same explanation several times at home. <b>L</b> Therefore, online courses can be particularly helpful for students who need more time.']}]},
{id:'g-cohesion', title:'Liên kết và mạch lạc', lv:'B1–C1', sum:'Mạch lạc (coherence) là ý đi theo trình tự logic; liên kết (cohesion) là dùng ngôn ngữ để nối các ý.', sections:[
 {h:'Từ nối theo chức năng', table:{head:['Chức năng','B1','B2–C1'], rows:[
  ['Thêm ý','and, also, besides','Moreover, Furthermore, In addition, Not only … but also'],['Đối lập','but, however','Nevertheless, On the other hand, Whereas, Conversely, By contrast'],
  ['Nguyên nhân','because, because of','since, due to, owing to, as a consequence of'],['Kết quả','so','Therefore, Consequently, As a result, Thus, hence'],
  ['Ví dụ','for example','For instance, such as, a case in point is, to illustrate'],['Nhấn mạnh','especially','In particular, Notably, Indeed, Above all'],
  ['Nhượng bộ','although','Admittedly, While it is true that …, Even though'],['Kết luận','In conclusion','To sum up, Overall, On balance, All things considered']]}},
 {h:'Từ quy chiếu', list:['Dùng this / these / such + danh từ tóm lại ý trước: This problem…, These measures…, Such a policy…','Dùng đại từ it / they / them, nhưng chắc chắn người đọc biết nó chỉ cái gì.']},
 {h:'Tránh lặp từ', list:['Đồng nghĩa: problem → issue, challenge; important → crucial, essential, vital; show → indicate, demonstrate.','Đổi từ loại: pollute → pollution → polluted.']},
 {h:'Thông tin cũ trước, mới sau', p:'Bắt đầu câu bằng điều người đọc đã biết (từ câu trước), kết thúc bằng thông tin mới. Câu sẽ nối với nhau tự nhiên.'}]},
{id:'g-style', title:'Văn phong và từ vựng học thuật', lv:'B2–C1', sum:'Nâng điểm từ vựng bằng độ chính xác và collocation, không phải bằng từ khó.', sections:[
 {h:'Trang trọng và thân mật', table:{head:['Thân mật','Trang trọng'], rows:[
  ['a lot of','a large number of / a great deal of / numerous'],['get','obtain, receive, become'],['big','significant, substantial, considerable'],['think','believe, argue, maintain'],
  ['kids','children'],['don\'t, can\'t','do not, cannot'],['really bad','extremely harmful / detrimental']]}},
 {h:'Danh từ hoá', p:'Biến động từ / tính từ thành danh từ để câu học thuật hơn.', ex:['Prices increased rapidly, which worried people. → The rapid increase in prices caused widespread concern.']},
 {h:'Rào đón và mức độ chắc chắn', p:'arguably, to a large extent, it could be argued that, tend to, are likely to, in many cases.'},
 {h:'Collocation hay dùng', list:['play a crucial role in, have a significant impact on, raise awareness of, pose a threat to, take measures to, address the issue of, meet the demand for, reach a consensus.']},
 {h:'Tránh', list:['Chữ viết tắt, tiếng lóng, câu hỏi tu từ quá nhiều, "I think" ở mọi câu.','Từ quá chung: thing, stuff, good, bad, very.']}]},
{id:'g-paraphrase', title:'Paraphrase và tóm tắt', lv:'B2–C1', sum:'Paraphrase đề bài ở mở bài và tóm tắt văn bản đều cần 5 kỹ thuật dưới đây.', sections:[
 {h:'5 kỹ thuật', table:{head:['Kỹ thuật','Ví dụ'], rows:[
  ['Đồng nghĩa','harmful → damaging; children → young people'],['Đổi từ loại','The government decided → The government\'s decision'],
  ['Chủ động ↔ bị động','People believe … → It is believed …'],['Đổi cấu trúc câu','Because it is cheap, … → Its low cost means …'],['Khái quát hoá','cars, buses and motorbikes → vehicles']]}},
 {h:'Tóm tắt', list:['Đọc hết, gạch ý chính của từng đoạn.','Bỏ ví dụ, số liệu nhỏ, lặp ý.','Viết bằng từ của bạn, giữ đúng quan điểm tác giả, không thêm ý kiến cá nhân.']}]},
{id:'g-email', title:'Email và thư', lv:'B1–B2', sum:'Email là dạng bài B1 phổ biến nhất: cần đúng định dạng, đủ ý và đúng giọng.', sections:[
 {h:'Bố cục', list:['Chào: Hi / Dear + tên (thân mật); Dear Mr / Ms + họ hoặc Dear Sir or Madam (trang trọng).','Câu mở: lý do viết thư / cảm ơn thư trước.','Thân: trả lời đủ từng ý trong đề, mỗi ý một đoạn ngắn.','Câu kết: mời, hẹn, mong hồi âm.','Ký tên: Best wishes / Love (thân mật); Yours sincerely (biết tên) / Yours faithfully (không biết tên).']},
 {h:'Mẫu câu', table:{head:['Mục đích','Thân mật','Trang trọng'], rows:[
  ['Mở thư','Thanks for your email!','I am writing to enquire about …'],['Xin lỗi','Sorry I haven\'t written for ages.','I apologise for the delay in replying.'],
  ['Đề nghị','Why don\'t we …? / How about …?','I would be grateful if you could …'],['Kết thư','Can\'t wait to see you!','I look forward to hearing from you.']]}}]},
{id:'g-opinion', title:'Bài luận quan điểm (Opinion)', lv:'B1–C1', sum:'Đề hỏi agree / disagree hoặc to what extent: phải nêu quan điểm rõ ràng và giữ nhất quán.', sections:[
 {h:'Bố cục 4–5 đoạn', list:['Mở bài: paraphrase đề + nêu quan điểm (thesis).','Thân 1, 2: mỗi đoạn một lý do theo PEEL.','(C1) Thân 3: nhượng bộ ý kiến đối lập rồi phản bác.','Kết bài: nhắc lại quan điểm bằng từ khác, tóm tắt lý do; không thêm ý mới.']},
 {h:'Mẫu câu', list:['Thesis: I strongly believe that … / I largely agree that … because …','Nhượng bộ: Admittedly, … However, … / While it is true that …, …','Kết bài: In conclusion, I firmly believe that … since …']},
 {h:'Lỗi hay gặp', list:['Quan điểm mở bài khác quan điểm kết bài.','Chỉ liệt kê ý, không giải thích và không có ví dụ.','"To what extent" nhưng không nói rõ mức độ đồng ý.']}]},
{id:'g-discussion', title:'Bài luận thảo luận và ưu – nhược điểm', lv:'B2–C1', sum:'Discuss both views: trình bày công bằng hai phía, rồi nêu ý kiến của bạn nếu đề yêu cầu.', sections:[
 {h:'Discuss both views', list:['Mở bài: giới thiệu tranh luận + (nếu đề hỏi) quan điểm của bạn.','Thân 1: quan điểm A và lý do.','Thân 2: quan điểm B và lý do.','Kết bài: tóm tắt, nêu rõ bạn nghiêng về bên nào.']},
 {h:'Advantages / disadvantages', list:['Thân 1: lợi ích; Thân 2: bất lợi.','Nếu đề hỏi "outweigh": phải kết luận bên nào lớn hơn và vì sao.']},
 {h:'Mẫu câu', p:'Those in favour of … argue that … / Opponents, on the other hand, claim that … / On balance, I believe … / The benefits clearly outweigh the drawbacks because …'}]},
{id:'g-problem', title:'Vấn đề – giải pháp, nguyên nhân – kết quả', lv:'B2–C1', sum:'Mỗi giải pháp phải gắn với một nguyên nhân hoặc vấn đề cụ thể và cho biết kết quả mong đợi.', sections:[
 {h:'Bố cục', list:['Mở bài: nêu vấn đề và cho biết bài sẽ bàn nguyên nhân / giải pháp.','Thân 1: 2 nguyên nhân (hoặc vấn đề), có giải thích.','Thân 2: 2 giải pháp tương ứng, cách thực hiện và hiệu quả.','Kết bài: tóm tắt, nhấn mạnh cần hành động.']},
 {h:'Mẫu câu', list:['Nguyên nhân: The main cause of … is … / … can be attributed to … / … stems from …','Hệ quả: This leads to … / As a consequence, … / This results in …','Giải pháp: One effective solution would be to … / Governments should … so that … / If …, … will …']}]},
{id:'g-chart', title:'Mô tả số liệu và biểu đồ', lv:'B2–C1', sum:'Mô tả khách quan: tổng quan trước, chi tiết sau, có so sánh, không nêu ý kiến.', sections:[
 {h:'Bố cục', list:['Câu giới thiệu: paraphrase tiêu đề biểu đồ.','Tổng quan (overview): 1–2 xu hướng hoặc đặc điểm nổi bật nhất, không có số liệu.','2 đoạn chi tiết: số liệu chính, so sánh, mốc cao nhất và thấp nhất.']},
 {h:'Từ vựng xu hướng', table:{head:['Xu hướng','Động từ','Danh từ','Mức độ'], rows:[
  ['Tăng','rise, increase, grow, climb','a rise / an increase / growth in','sharply, dramatically, steadily, slightly'],
  ['Giảm','fall, decrease, decline, drop','a fall / a decrease / a decline in','significantly, gradually, marginally'],
  ['Ổn định','remain stable, level off, stabilise','—','—'],['Dao động','fluctuate','fluctuations in','—']]}},
 {h:'Giới từ với số liệu', list:['rise from 20% to 65%; rise by 45 percentage points; reach / peak at 65%; stand at 25%.','account for / make up 30% of …; twice as high as; the highest figure.']}]},
{id:'g-narrative', title:'Kể chuyện (Narrative)', lv:'B1–B2', sum:'Một câu chuyện tốt có mở đầu hấp dẫn, diễn biến có cao trào và kết thúc rõ ràng.', sections:[
 {h:'Bố cục', list:['Mở: bối cảnh (ai, ở đâu, khi nào) + một chi tiết gây tò mò.','Diễn biến: chuỗi sự việc theo thời gian, có một vấn đề hoặc bất ngờ.','Cao trào: khoảnh khắc quan trọng nhất.','Kết: kết quả, cảm xúc, bài học.']},
 {h:'Ngôn ngữ', list:['Thì quá khứ: đơn (sự việc chính), tiếp diễn (bối cảnh), hoàn thành (việc trước đó).','Từ chỉ trình tự: At first, Then, Suddenly, Just as, Eventually, In the end.','Tính từ và trạng từ cảm xúc: nervous, relieved, thrilled; slowly, desperately.','Một vài câu thoại ngắn làm truyện sinh động.']}]},
{id:'g-proposal', title:'Báo cáo và đề xuất (Report / Proposal)', lv:'C1', sum:'Văn bản thực tế gửi người có quyền quyết định: có tiêu đề, khách quan, đề xuất cụ thể.', sections:[
 {h:'Bố cục', list:['Tiêu đề và mục: Introduction – Current situation (Findings) – Recommendations – Conclusion.','Introduction: mục đích, nguồn thông tin (khảo sát, phỏng vấn).','Recommendations: mỗi đề xuất kèm lý do và lợi ích.']},
 {h:'Ngôn ngữ', list:['Bị động và khách quan: It was found that …, 60% of those surveyed …','Đề xuất: It is recommended that … (should) be …; I would suggest + V-ing; … should be introduced.','Kết: If these changes are implemented, …']}]},
{id:'g-rubric', title:'Tiêu chí chấm và mục tiêu theo trình độ', lv:'B1–C1', sum:'Biết giám khảo chấm gì để luyện đúng chỗ. 4 tiêu chí dưới đây cũng là tiêu chí Claude dùng khi chấm.', sections:[
 {h:'4 tiêu chí', table:{head:['Tiêu chí','Câu hỏi giám khảo đặt ra'], rows:[
  ['Nội dung (Task)','Trả lời đủ đề chưa? Ý có phát triển và có ví dụ không? Đúng dạng bài và độ dài?'],['Mạch lạc (Coherence)','Chia đoạn hợp lý? Ý đi theo trình tự logic? Từ nối dùng đúng, không máy móc?'],
  ['Từ vựng (Vocabulary)','Đủ đa dạng và chính xác? Collocation tự nhiên? Có lỗi chính tả hay dạng từ?'],['Ngữ pháp (Grammar)','Có nhiều cấu trúc khác nhau? Tỷ lệ câu không lỗi cao không?']]}},
 {h:'Mục tiêu theo trình độ', table:{head:['','B1','B2','C1'], rows:[
  ['Độ dài','100–180 từ','200–280 từ','280–360 từ'],['Câu','đơn và ghép, một số câu phức','câu phức đa dạng, mệnh đề quan hệ, điều kiện, bị động','linh hoạt: đảo ngữ, câu chẻ, phân từ, danh từ hoá'],
  ['Từ vựng','từ thông dụng theo chủ đề','collocation, từ nối đa dạng','sắc thái, rào đón, từ học thuật'],['Lập luận','nêu ý và ví dụ','giải thích, so sánh, hai mặt','phản biện, đánh giá, kết luận tinh tế']]}},
 {h:'Lộ trình gợi ý mỗi tuần', list:['3 buổi: ôn một bài lý thuyết ngữ pháp + làm nhóm bài tương ứng.','2 buổi: viết một đoạn văn hoặc một đề tự luyện, tự soát theo checklist.','1 buổi: viết lại bài cũ sau khi nhận nhận xét. Viết lại là cách tiến bộ nhanh nhất.']}]}
];

/* Liên kết bài đoạn văn / bài luận với chương cẩm nang */
window.GUIDE_FOR = {pa1:['g-cohesion'],pa2:['g-cohesion'],pa3:['g-sentence'],pa4:['g-email'],pa5:['g-paragraph'],pa6:['g-narrative'],pa7:['g-cohesion'],pa8:['g-process'],pa9:['g-problem','g-paragraph'],pa10:['g-paragraph','g-cohesion'],pa11:['g-chart'],pa12:['g-narrative'],pa13:['g-cohesion'],pa14:['g-style'],pa15:['g-opinion','g-style'],pa16:['g-problem'],pa17:['g-paraphrase'],pa18:['g-opinion'],
 es1:['g-email'],es2:['g-opinion'],es3:['g-narrative'],es4:['g-opinion'],es5:['g-discussion'],es6:['g-problem'],es7:['g-discussion','g-style'],es8:['g-proposal'],es9:['g-opinion','g-style']};

/* Dạng bài cho đề tự luyện */
window.TYPES = {
 email:{name:'Email / thư', guide:'g-email', words:{B1:[100,130],B2:[140,180],C1:[180,220]}, outline:['Chào và câu mở (lý do viết / cảm ơn)','Trả lời từng ý trong đề, mỗi ý một đoạn','Câu kết: mời, hẹn hoặc mong hồi âm','Ký tên phù hợp'], req:['Đúng định dạng chào và ký tên','Trả lời đủ các ý của đề','Giọng văn phù hợp người nhận','Có câu kết mời hoặc mong hồi âm']},
 opinion:{name:'Nghị luận quan điểm', guide:'g-opinion', words:{B1:[150,180],B2:[250,280],C1:[300,350]}, outline:['Mở bài: paraphrase đề + nêu quan điểm','Thân 1: lý do 1 + giải thích + ví dụ','Thân 2: lý do 2 + giải thích + ví dụ','(B2–C1) Nhượng bộ và phản bác','Kết bài: nhắc lại quan điểm'], req:['Quan điểm rõ ràng và nhất quán','Mỗi đoạn thân bài có câu chủ đề, giải thích và ví dụ','Từ nối đa dạng','Có ít nhất 3 loại cấu trúc câu khác nhau','Kết bài không thêm ý mới']},
 discussion:{name:'Thảo luận hai quan điểm', guide:'g-discussion', words:{B1:[150,180],B2:[250,280],C1:[300,350]}, outline:['Mở bài: giới thiệu hai quan điểm (+ ý kiến của bạn)','Thân 1: quan điểm thứ nhất và lý do','Thân 2: quan điểm thứ hai và lý do','Kết bài: tóm tắt và ý kiến của bạn'], req:['Trình bày công bằng cả hai quan điểm','Nêu rõ ý kiến cá nhân','Có từ nối đối lập (whereas, on the other hand)','Ví dụ cụ thể cho mỗi bên']},
 advdis:{name:'Ưu điểm – nhược điểm', guide:'g-discussion', words:{B1:[150,180],B2:[250,280],C1:[300,350]}, outline:['Mở bài: giới thiệu xu hướng + (nếu đề hỏi) bên nào lớn hơn','Thân 1: ưu điểm','Thân 2: nhược điểm','Kết bài: đánh giá tổng thể'], req:['Có ít nhất 2 ưu điểm và 2 nhược điểm được giải thích','Trả lời rõ "outweigh" nếu đề hỏi','Câu điều kiện hoặc so sánh để đánh giá','Kết bài có kết luận rõ ràng']},
 problem:{name:'Vấn đề – giải pháp', guide:'g-problem', words:{B1:[150,180],B2:[250,280],C1:[300,350]}, outline:['Mở bài: nêu vấn đề','Thân 1: nguyên nhân hoặc vấn đề cụ thể','Thân 2: giải pháp tương ứng + hiệu quả','Kết bài: tóm tắt, kêu gọi hành động'], req:['Có ít nhất 2 nguyên nhân / vấn đề','Giải pháp gắn với nguyên nhân, khả thi','Dùng câu bị động và câu điều kiện','Từ nối nguyên nhân – kết quả']},
 chart:{name:'Mô tả số liệu', guide:'g-chart', words:{B1:[100,130],B2:[150,180],C1:[170,200]}, outline:['Giới thiệu: paraphrase tiêu đề','Tổng quan: xu hướng chính, không số liệu','Chi tiết 1: nhóm số liệu thứ nhất','Chi tiết 2: nhóm thứ hai và so sánh'], req:['Có câu tổng quan','Số liệu chính xác, có giới từ đúng (from … to, by)','Có so sánh giữa các nhóm','Không nêu ý kiến cá nhân']},
 narrative:{name:'Kể chuyện', guide:'g-narrative', words:{B1:[130,160],B2:[180,220],C1:[250,300]}, outline:['Mở: bối cảnh + chi tiết gây tò mò','Diễn biến có vấn đề hoặc bất ngờ','Cao trào','Kết: kết quả, cảm xúc, bài học'], req:['Dùng đúng các thì quá khứ','Từ chỉ trình tự','Có miêu tả cảm xúc hoặc lời thoại','Kết thúc rõ ràng']},
 proposal:{name:'Báo cáo / đề xuất', guide:'g-proposal', words:{B1:[150,180],B2:[220,260],C1:[280,330]}, outline:['Introduction: mục đích, nguồn thông tin','Current situation / Findings','Recommendations: đề xuất + lý do','Conclusion'], req:['Có tiêu đề cho từng phần','Văn phong trang trọng, khách quan','Có ngôn ngữ đề xuất (It is recommended that / should be)','Đề xuất cụ thể kèm lý do']}
};

/* Ngân hàng chủ đề */
window.TOPICS = [
{key:'education', name:'Giáo dục', en:'Education', vocab:['academic performance','vocational training','tuition fees','lifelong learning','critical thinking','exam pressure','extracurricular activities','distance learning','a well-rounded education','drop out of school'],
 ideas:['Học online và học trực tiếp','Áp lực thi cử, học thêm','Đại học hay học nghề','Kỹ năng mềm và kiến thức sách vở'],
 prompts:[{lv:'B1',type:'email',text:'Your English-speaking friend is thinking of studying in Vietnam for one semester. Write an email describing a typical school day at your school and giving advice.'},
  {lv:'B1',type:'opinion',text:'Students should be allowed to use their phones at school. Do you agree or disagree?'},
  {lv:'B2',type:'discussion',text:'Some people think that extra classes after school are necessary to succeed; others believe they put too much pressure on students. Discuss both views and give your opinion.'},
  {lv:'C1',type:'opinion',text:'The main purpose of education is to prepare young people for employment. To what extent do you agree?'}]},
{key:'technology', name:'Công nghệ và AI', en:'Technology & AI', vocab:['artificial intelligence','digital literacy','automation','screen time','data privacy','cutting-edge technology','rely heavily on','be replaced by machines','technological advances','the digital divide'],
 ideas:['AI trong học tập và việc làm','Thời gian dùng màn hình','Quyền riêng tư dữ liệu','Khoảng cách số giữa thành thị và nông thôn'],
 prompts:[{lv:'B1',type:'narrative',text:'Write a story that begins: "The day my phone stopped working, I discovered something important."'},
  {lv:'B2',type:'advdis',text:'More and more students use AI chatbots to help with their homework. What are the advantages and disadvantages of this trend?'},
  {lv:'B2',type:'chart',text:'The percentage of households with internet access in a country rose from 30% in 2010 to 72% in 2018 and 91% in 2024, while households with a landline phone fell from 65% to 20% over the same period. Summarise the information.'},
  {lv:'C1',type:'discussion',text:'Some argue that automation will create more jobs than it destroys; others fear widespread unemployment. Discuss both views and give your own opinion.'}]},
{key:'environment', name:'Môi trường', en:'Environment', vocab:['climate change','greenhouse gas emissions','renewable energy','single-use plastics','carbon footprint','deforestation','environmentally friendly','raise awareness of','take drastic measures','sustainable development'],
 ideas:['Rác thải nhựa','Ô nhiễm không khí đô thị','Năng lượng tái tạo','Trách nhiệm cá nhân hay của chính phủ'],
 prompts:[{lv:'B1',type:'email',text:'Your school is organising a "Green Week". Write an email to a friend inviting them to join and explaining the activities.'},
  {lv:'B2',type:'problem',text:'Air pollution in big cities is getting worse. What are the causes, and what can be done to solve the problem?'},
  {lv:'B2',type:'opinion',text:'Protecting the environment is the responsibility of governments, not individuals. To what extent do you agree?'},
  {lv:'C1',type:'proposal',text:'Your local council wants to make your town greener. Write a proposal recommending three practical changes and explaining their benefits.'}]},
{key:'health', name:'Sức khoẻ và lối sống', en:'Health & Lifestyle', vocab:['a sedentary lifestyle','a balanced diet','mental health','physical activity','junk food','obesity rates','work-life balance','reduce the risk of','stress-related illnesses','healthcare services'],
 ideas:['Lối sống ít vận động của học sinh','Sức khoẻ tinh thần','Đồ ăn nhanh','Thể thao trong trường'],
 prompts:[{lv:'B1',type:'opinion',text:'Every school should have at least one hour of physical exercise a day. Do you agree?'},
  {lv:'B1',type:'narrative',text:'Write a story about a time you decided to change an unhealthy habit.'},
  {lv:'B2',type:'problem',text:'Many teenagers today suffer from stress and anxiety. Why is this happening, and how can schools and families help?'},
  {lv:'C1',type:'discussion',text:'Some people believe that governments should tax unhealthy food to improve public health; others say people should be free to choose. Discuss both views and give your opinion.'}]},
{key:'work', name:'Việc làm và nghề nghiệp', en:'Work & Careers', vocab:['job satisfaction','career prospects','a stable income','remote work','soft skills','the labour market','job security','gain work experience','climb the career ladder','skilled workers'],
 ideas:['Làm việc từ xa','Chọn nghề theo đam mê hay thu nhập','Làm thêm khi đi học','Kỹ năng cần cho tương lai'],
 prompts:[{lv:'B1',type:'email',text:'You have seen an advertisement for a summer job at a café. Write an email to the manager applying for the job.'},
  {lv:'B2',type:'discussion',text:'Some young people choose a job for its salary; others choose a job they enjoy. Discuss both views and give your opinion.'},
  {lv:'B2',type:'advdis',text:'More companies now allow employees to work from home. Do the advantages outweigh the disadvantages?'},
  {lv:'C1',type:'opinion',text:'Soft skills such as communication and teamwork are now more important than academic qualifications. To what extent do you agree?'}]},
{key:'family', name:'Gia đình và các thế hệ', en:'Family & Generations', vocab:['the generation gap','extended family','nuclear family','household chores','family values','bring up children','take care of elderly parents','strong family bonds','peer pressure','an ageing population'],
 ideas:['Khoảng cách thế hệ','Ba thế hệ chung nhà','Chia sẻ việc nhà','Dân số già'],
 prompts:[{lv:'B1',type:'email',text:'Your friend asks how your family celebrates special occasions. Write an email describing one family celebration.'},
  {lv:'B2',type:'advdis',text:'In many countries, fewer families now live with their grandparents. What are the advantages and disadvantages of several generations living together?'},
  {lv:'B2',type:'opinion',text:'Teenagers should be required to help with household chores. Do you agree?'},
  {lv:'C1',type:'problem',text:'Vietnam\'s population is ageing rapidly. What problems may this cause, and what measures should be taken?'}]},
{key:'culture', name:'Văn hoá và truyền thống', en:'Culture & Traditions', vocab:['cultural heritage','traditional festivals','preserve customs','globalisation','cultural identity','intangible heritage','local craftsmanship','pass down from generation to generation','cultural exchange','national pride'],
 ideas:['Giữ gìn lễ hội truyền thống','Toàn cầu hoá và bản sắc','Làng nghề','Ẩm thực'],
 prompts:[{lv:'B1',type:'email',text:'Write an email to a foreign friend recommending a traditional Vietnamese festival they should experience and explaining why.'},
  {lv:'B2',type:'opinion',text:'Traditional festivals are losing their meaning because they have become too commercial. Do you agree?'},
  {lv:'C1',type:'discussion',text:'Some believe globalisation threatens local cultures; others think it helps cultures share and grow. Discuss both views and give your opinion.'},
  {lv:'C1',type:'proposal',text:'Your city wants to attract young people to its museum of local history. Write a proposal with recommendations.'}]},
{key:'cities', name:'Đô thị và giao thông', en:'Cities & Transport', vocab:['traffic congestion','public transport','urban sprawl','rush hour','affordable housing','green spaces','infrastructure','commute to work','overcrowded cities','vehicle emissions'],
 ideas:['Ùn tắc giao thông','Xe máy và giao thông công cộng','Nhà ở giá rẻ','Không gian xanh'],
 prompts:[{lv:'B1',type:'opinion',text:'Living in a city is better than living in the countryside. Do you agree?'},
  {lv:'B2',type:'chart',text:'In a city, the share of commuters using motorbikes fell from 80% in 2015 to 62% in 2025, while bus users rose from 8% to 20% and metro users from 0% to 10%. Car use stayed at around 8%. Summarise the information.'},
  {lv:'B2',type:'problem',text:'Housing in big cities is becoming too expensive for young people. What are the causes and possible solutions?'},
  {lv:'C1',type:'opinion',text:'Private cars should be banned from city centres. To what extent do you agree?'}]},
{key:'media', name:'Truyền thông và mạng xã hội', en:'Media & Social Media', vocab:['fake news','online privacy','cyberbullying','influencers','go viral','media literacy','spread misinformation','social networking sites','digital footprint','an echo chamber'],
 ideas:['Tin giả','Bắt nạt trên mạng','Người có ảnh hưởng (influencer)','Quảng cáo nhắm vào trẻ em'],
 prompts:[{lv:'B1',type:'narrative',text:'Write a story about a post that went viral and changed someone\'s life.'},
  {lv:'B2',type:'problem',text:'Fake news spreads quickly on social media. Why does this happen, and how can the problem be reduced?'},
  {lv:'B2',type:'opinion',text:'Social media influencers have a negative effect on young people. To what extent do you agree?'},
  {lv:'C1',type:'discussion',text:'Some say social media companies should be responsible for what users post; others believe this threatens free speech. Discuss both views and give your opinion.'}]},
{key:'travel', name:'Du lịch', en:'Travel & Tourism', vocab:['mass tourism','eco-tourism','tourist attractions','local economy','cultural exchange','off the beaten track','overtourism','boost the economy','travel broadens the mind','a once-in-a-lifetime experience'],
 ideas:['Du lịch đại chúng và môi trường','Du lịch sinh thái','Lợi ích kinh tế cho địa phương','Du lịch một mình'],
 prompts:[{lv:'B1',type:'email',text:'A friend is planning to visit your hometown. Write an email suggesting places to visit and things to do.'},
  {lv:'B1',type:'narrative',text:'Write a story about a trip where everything went wrong but you still had a great time.'},
  {lv:'B2',type:'advdis',text:'Tourism brings money to many places but can also cause problems. Do the advantages outweigh the disadvantages?'},
  {lv:'C1',type:'problem',text:'Some popular destinations in Vietnam are suffering from overtourism. What problems does this create, and how should they be managed?'}]},
{key:'society', name:'Xã hội và cộng đồng', en:'Society & Community', vocab:['volunteer work','social responsibility','gender equality','the gap between rich and poor','community service','charitable organisations','make a difference','equal opportunities','vulnerable groups','give something back'],
 ideas:['Hoạt động tình nguyện','Bình đẳng giới','Khoảng cách giàu nghèo','Giúp đỡ người yếu thế'],
 prompts:[{lv:'B1',type:'email',text:'Write an email to a friend telling them about a volunteer activity you took part in and inviting them to join next time.'},
  {lv:'B2',type:'opinion',text:'All secondary school students should do community service as part of their studies. Do you agree?'},
  {lv:'B2',type:'discussion',text:'Some people think rich people have a duty to help the poor; others believe it should be a personal choice. Discuss both views and give your opinion.'},
  {lv:'C1',type:'opinion',text:'True gender equality has already been achieved in most workplaces. To what extent do you agree?'}]},
{key:'economy', name:'Kinh tế và tiêu dùng', en:'Economy & Consumerism', vocab:['consumer society','impulse buying','online shopping','a throwaway culture','brand loyalty','save money','live within your means','economic growth','a cost-of-living crisis','second-hand goods'],
 ideas:['Mua sắm online','Văn hoá dùng một lần','Tiết kiệm của người trẻ','Quảng cáo'],
 prompts:[{lv:'B1',type:'opinion',text:'Young people should learn how to manage money at school. Do you agree?'},
  {lv:'B2',type:'advdis',text:'Online shopping is replacing traditional shops. What are the advantages and disadvantages of this?'},
  {lv:'B2',type:'chart',text:'Between 2019 and 2025, the share of a country\'s retail sales made online rose from 5% to 21%. Sales in traditional markets fell from 45% to 30%, while supermarkets stayed stable at around 50%. Summarise the information.'},
  {lv:'C1',type:'problem',text:'Modern consumer culture encourages people to buy more than they need. What are the effects on individuals and the environment, and what can be done?'}]}
];
