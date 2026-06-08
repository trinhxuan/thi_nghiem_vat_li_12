const practiceData = {
    nhiet: [
        {
            id: 'nhiet_q1',
            image: 'bai1_nhiet.jpg',
            context: '<strong>Câu 1. Đo nhiệt dung riêng của nước bằng phương pháp điện</strong><br>Một nhóm học sinh tiến hành thí nghiệm đo nhiệt dung riêng của nước. Các dụng cụ được kết nối đúng quy tắc: dây nung nhúng trong nhiệt lượng kế, nguồn điện một chiều, ampe kế mắc nối tiếp và vôn kế mắc song song với dây nung. Trình tự đo được thực hiện như sau: Cân nhiệt lượng kế rỗng; rót nước vào và cân lại để xác định khối lượng nước là 200,0 g; đợi hệ ổn định rồi đo nhiệt độ ban đầu 25,0°C; đóng mạch điện và bấm giờ. Số chỉ trên vôn kế và ampe kế luôn ổn định ở mức 12,0 V và 2,50 A. Sau 300 s, ngắt mạch và tiếp tục khuấy nhẹ, nhiệt độ cực đại đạt được là 35,0°C. Bỏ qua nhiệt lượng do vỏ nhiệt lượng kế và môi trường hấp thụ.',
            statements: [
                { 
                    id: 'a', 
                    text: 'Năng lượng điện mà dây nung tiêu thụ trong thời gian đun là 9000 J.', 
                    isTrue: true, 
                    exp: 'Đúng. Điện năng tiêu thụ của dây nung được tính bằng công thức $A = UIt = 12,0 \\cdot 2,50 \\cdot 300 = 9000$ J.' 
                },
                { 
                    id: 'b', 
                    text: 'Giá trị nhiệt dung riêng của nước tính được từ số liệu thực nghiệm của nhóm là 4500 J/(kg.K).', 
                    isTrue: true, 
                    exp: 'Đúng. Áp dụng phương trình cân bằng năng lượng lí tưởng (bỏ qua hao phí): $A = mc\\Delta T \\Rightarrow 9000 = 0,2 \\cdot c \\cdot (35,0 - 25,0)$. Giải phương trình ta được $c = 4500$ J/(kg.K).' 
                },
                { 
                    id: 'c', 
                    text: 'Nếu nhiệt dung riêng chuẩn của nước là 4180 J/(kg.K), việc bỏ qua nhiệt lượng mà vỏ nhiệt lượng kế hấp thụ là nguyên nhân chính khiến kết quả đo được lớn hơn giá trị chuẩn.', 
                    isTrue: true, 
                    exp: 'Đúng. Thực tế năng lượng $A$ cung cấp phải chia cho cả nước và vỏ bình. Nếu ta giả định toàn bộ năng lượng đó chỉ truyền cho nước, ta đã đánh giá quá cao phần năng lượng nước nhận được ứng với độ tăng nhiệt độ $\\Delta T$, dẫn đến kết quả $c$ tính ra bị sai lệch tăng (sai số hệ thống).' 
                },
                { 
                    id: 'd', 
                    text: 'Việc thao tác khuấy liên tục và nhẹ nhàng bằng que khuấy sẽ tạo ra nhiệt lượng do ma sát làm nhiệt độ nước tăng lên đáng kể, gây sai lệch lớn cho phép đo.', 
                    isTrue: false, 
                    exp: 'Sai. Nhiệt lượng sinh ra do công cơ học của que khuấy là vô cùng nhỏ, không đáng kể so với nhiệt lượng do dây nung tỏa ra. Việc khuấy là bắt buộc để nhiệt độ khối nước đồng đều, giúp nhiệt kế đo đúng giá trị nhiệt độ chung thay vì chỉ đo vùng nước cục bộ quanh dây nung.' 
                }
            ]
        },
        {
            id: 'nhiet_q2',
            image: 'bai2_nhiet.jpg',
            context: '<strong>Câu 2. Khảo sát đồ thị nhiệt độ - thời gian</strong><br>Trong một bài thực hành nâng cao, học sinh dùng một bếp điện có công suất hữu ích không đổi $P$ để đun nóng lần lượt 3 khối vật rắn $A, B, C$ có cùng khối lượng $m$. Cả 3 vật đều được bọc cách nhiệt hoàn hảo với môi trường. Phần mềm Data Logger ghi nhận nhiệt độ ban đầu của cả 3 vật rắn đều xuất phát tại giá trị $5T_0$. Đồ thị biểu diễn sự phụ thuộc của nhiệt độ $T$ theo thời gian $t$ của 3 vật trong giai đoạn chưa xảy ra sự chuyển thể là các đường thẳng có hệ số góc lần lượt là $k_A, k_B, k_C$ với $k_A > k_B > k_C$.',
            statements: [
                { 
                    id: 'a', 
                    text: 'Phương trình mô tả sự thay đổi nhiệt độ theo thời gian của các vật rắn có dạng $T = \\frac{P}{mc}t + 5T_0$.', 
                    isTrue: true, 
                    exp: 'Đúng. Định luật bảo toàn năng lượng: $Pt = mc(T - T_{\\text{bđ}}) \\Rightarrow T = \\frac{P}{mc}t + T_{\\text{bđ}}$. Thay $T_{\\text{bđ}} = 5T_0$, ta được phương trình chính xác của đồ thị.' 
                },
                { 
                    id: 'b', 
                    text: 'Đường biểu diễn đồ thị của vật $A$ là đường thẳng dốc nhất và đi qua gốc tọa độ $O(0,0)$.', 
                    isTrue: false, 
                    exp: 'Sai. Đồ thị là đường thẳng có hệ số góc $k_A$ lớn nhất nên dốc nhất, nhưng nó cắt trục tung tại giá trị $5T_0$ chứ không đi qua gốc tọa độ.' 
                },
                { 
                    id: 'c', 
                    text: 'Từ dữ liệu hệ số góc, ta kết luận được nhiệt dung riêng của chất cấu tạo nên vật $A$ là lớn nhất trong 3 vật.', 
                    isTrue: false, 
                    exp: 'Sai. Hệ số góc của đồ thị là $k = \\frac{P}{mc}$. Vì $P$ và $m$ không đổi, đồ thị có độ dốc $k$ càng lớn thì nhiệt dung riêng $c$ (nằm ở mẫu số) phải càng nhỏ. Do $k_A$ lớn nhất nên vật $A$ có nhiệt dung riêng nhỏ nhất.' 
                },
                { 
                    id: 'd', 
                    text: 'Nếu thực hiện lại thí nghiệm đun vật $C$ bằng nguồn nhiệt trên nhưng cắt bỏ một nửa khối lượng của vật $C$, đường đồ thị mới thu được sẽ có hệ số góc tăng gấp đôi so với ban đầu.', 
                    isTrue: true, 
                    exp: 'Đúng. Vì $k_C = \\frac{P}{m \\cdot c_C}$, nếu khối lượng mới $m\' = \\frac{m}{2}$ thì hệ số góc mới $k\' = \\frac{P}{\\frac{m}{2} \\cdot c_C} = 2k_C$. Đường đồ thị sẽ dốc hơn gấp đôi.' 
                }
            ]
        },
        {
            id: 'nhiet_q3',
            image: 'bai3_nhiet.jpg',
            context: '<strong>Câu 3. Đo nhiệt nóng chảy riêng của nước đá (Phương pháp triệt tiêu hao phí)</strong><br>Học sinh bố trí một phễu chứa nước đá đang tan, bên trong phễu có vùi một dây điện trở. Nước đá tan ra nhỏ giọt xuống một cốc thủy tinh đặt trên cân điện tử có độ chia nhỏ nhất 0,01 g.<br>Giai đoạn 1 (Chưa cấp điện): Bấm đồng hồ trong thời gian 300 s, khối lượng nước chảy xuống cốc là 4,00 g.<br>Giai đoạn 2 (Cấp điện công suất 15,0 W): Tiếp tục bấm giờ trong thời gian 300 s tiếp theo, khối lượng nước chảy xuống cốc thêm được 18,00 g.',
            statements: [
                { 
                    id: 'a', 
                    text: 'Ở Giai đoạn 1, do chưa có dòng điện chạy qua dây điện trở nên lượng nước đá tan ra thuần túy là do nhận nhiệt lượng từ môi trường không khí xung quanh.', 
                    isTrue: true, 
                    exp: 'Đúng. Khối nước đá ở 0°C thấp hơn nhiệt độ phòng nên nó nhận nhiệt lượng từ không khí truyền vào để nóng chảy.' 
                },
                { 
                    id: 'b', 
                    text: 'Ở Giai đoạn 2, khối lượng nước đá tan ra hoàn toàn do tác dụng nhiệt của dòng điện là 18,00 g.', 
                    isTrue: false, 
                    exp: 'Sai. Trong 18,00 g nước đá tan ra ở Giai đoạn 2, có một phần tan do nhiệt của dây điện trở và một phần tan do nhiệt của môi trường (tương tự Giai đoạn 1). Khối lượng đá tan do riêng dây điện trở cung cấp phải là $18,00 - 4,00 = 14,00$ g.' 
                },
                { 
                    id: 'c', 
                    text: 'Theo kết quả đo đạc của thí nghiệm này, nhiệt nóng chảy riêng của nước đá có giá trị xấp xỉ $3,21 \\cdot 10^5$ J/kg.', 
                    isTrue: true, 
                    exp: 'Đúng. Nhiệt lượng dây nung tỏa ra là $Q = Pt = 15,0 \\cdot 300 = 4500$ J. Nhiệt nóng chảy riêng $\\lambda = \\frac{Q}{\\Delta m_{\\text{điện}}} = \\frac{4500}{0,014} \\approx 321428$ J/kg $\\approx 3,21 \\cdot 10^5$ J/kg.' 
                },
                { 
                    id: 'd', 
                    text: 'Ưu điểm của phương pháp hai giai đoạn này là giúp học sinh không cần phải bọc vật liệu cách nhiệt quá phức tạp cho phễu đựng nước đá.', 
                    isTrue: true, 
                    exp: 'Đúng. Phương pháp dùng hiệu số $(m_2 - m_1)$ trong cùng một khoảng thời gian $\\Delta t$ đã tự động trừ đi lượng đá tan do sự xâm nhập nhiệt từ môi trường. Kỹ thuật này giúp xử lý triệt để sai số hệ thống về hao phí nhiệt mà không cần hệ thống cách nhiệt hoàn hảo.' 
                }
            ]
        },
        {
            id: 'nhiet_q4',
            image: 'bai4_nhiet.jpg',
            context: '<strong>Câu 4. Đo nhiệt nóng chảy riêng (Phương pháp hỗn hợp)</strong><br>Để xác định nhiệt nóng chảy riêng $\\lambda$ của nước đá, học sinh dùng một nhiệt lượng kế lí tưởng (cách nhiệt hoàn toàn). Đổ vào nhiệt lượng kế 200,0 g nước ở 30,0°C. Dùng khăn giấy thấm khô bề mặt một viên nước đá đang tan ở 0°C có khối lượng 30,0 g rồi thả vào nhiệt lượng kế. Khuấy nhẹ cho đến khi đá tan hoàn toàn, hệ thống đạt nhiệt độ cân bằng ở 15,0°C. Cho nhiệt dung riêng của nước lỏng là 4200 J/(kg.K).',
            statements: [
                { 
                    id: 'a', 
                    text: 'Việc dùng khăn giấy thấm khô viên đá trước khi thả vào nhiệt lượng kế là không cần thiết và làm kéo dài thời gian thao tác đo.', 
                    isTrue: false, 
                    exp: 'Sai. Thao tác này là bắt buộc. Nếu không thấm khô, viên đá sẽ mang theo một lượng nước tự do ở 0°C. Lượng nước này làm tăng khối lượng tổng cân được ban đầu nhưng không trải qua quá trình thu nhiệt nóng chảy, dẫn đến sai số rất lớn cho kết quả $\\lambda$.' 
                },
                { 
                    id: 'b', 
                    text: 'Nhiệt lượng mà lượng nước ấm trong nhiệt lượng kế tỏa ra để hạ nhiệt độ xuống trạng thái cân bằng là 12600 J.', 
                    isTrue: true, 
                    exp: 'Đúng. $Q_{\\text{tỏa}} = m_{\\text{nước ấm}} c (T_0 - T_{\\text{cb}}) = 0,2 \\cdot 4200 \\cdot (30,0 - 15,0) = 12600$ J.' 
                },
                { 
                    id: 'c', 
                    text: 'Biểu thức cân bằng nhiệt của toàn bộ quá trình trao đổi năng lượng trong thí nghiệm này là $m_{\\text{đá}}\\lambda = m_{\\text{nước ấm}}c(T_0 - T_{\\text{cb}})$.', 
                    isTrue: false, 
                    exp: 'Sai. Viên nước đá không chỉ thu nhiệt để tan chảy ở 0°C ($m_{\\text{đá}}\\lambda$) mà phần nước mới tan ra này còn tiếp tục thu nhiệt để tăng nhiệt độ từ 0°C lên 15,0°C ($m_{\\text{đá}}c(T_{\\text{cb}} - 0)$). Biểu thức đúng phải là: $m_{\\text{đá}}\\lambda + m_{\\text{đá}}c(T_{\\text{cb}} - 0) = m_{\\text{nước ấm}}c(T_0 - T_{\\text{cb}})$.' 
                },
                { 
                    id: 'd', 
                    text: 'Từ các dữ liệu thực nghiệm trên, nhiệt nóng chảy riêng của nước đá được xác định là $3,57 \\cdot 10^5$ J/kg.', 
                    isTrue: true, 
                    exp: 'Đúng. Lắp số vào phương trình chuẩn: $0,03\\lambda + 0,03 \\cdot 4200 \\cdot 15,0 = 12600 \\Rightarrow 0,03\\lambda + 1890 = 12600 \\Rightarrow \\lambda = 3,57 \\cdot 10^5$ J/kg.' 
                }
            ]
        },
        {
            id: 'nhiet_q5',
            image: 'bai5_nhiet.jpg',
            context: '<strong>Câu 5. Đo nhiệt hóa hơi riêng bằng số liệu bảng</strong><br>Học sinh dùng một bình đun nước có công suất 1500 W đặt trên cân điện tử để đo nhiệt hóa hơi riêng của nước. Học sinh trừ bì vỏ ấm, rót nước vào đun. Khi nước bắt đầu sôi mạnh (nhiệt độ giữ ổn định ở 100°C), học sinh lấy mốc $t = 0$ và ghi nhận khối lượng nước ban đầu là 400 g. Cứ sau mỗi phút, học sinh đọc số liệu một lần và ghi vào bảng sau:<div class="table-responsive"><table class="styled-table"><thead><tr><th>Thời gian t (s)</th><th>0</th><th>60</th><th>120</th><th>180</th></tr></thead><tbody><tr><td><strong>Khối lượng m (g)</strong></td><td>400</td><td>360</td><td>320</td><td>280</td></tr></tbody></table></div>',
            statements: [
                { 
                    id: 'a', 
                    text: 'Từ bảng số liệu, có thể thấy tốc độ bay hơi của nước trong bình diễn ra không đều theo thời gian.', 
                    isTrue: false, 
                    exp: 'Sai. Khối lượng nước giảm theo chuỗi $400 \\rightarrow 360 \\rightarrow 320 \\rightarrow 280$. Độ giảm khối lượng sau mỗi 60 s luôn là 40 g. Do đó, tốc độ hóa hơi là tuyến tính và hoàn toàn đều đặn.' 
                },
                { 
                    id: 'b', 
                    text: 'Tại thời điểm $t = 120$ s, khối lượng nước đã bay hơi được dùng trong công thức tính toán là 320 g.', 
                    isTrue: false, 
                    exp: 'Sai. Khối lượng 320 g là lượng nước còn lại trong bình. Lượng nước đã bay hơi ($\\Delta m$) tính từ đầu quá trình là $400 - 320 = 80$ g.' 
                },
                { 
                    id: 'c', 
                    text: 'Nhiệt hóa hơi riêng $L$ của nước được tính từ cặp dữ liệu ở mốc thời gian $t = 60$ s là $2,25 \\cdot 10^6$ J/kg.', 
                    isTrue: true, 
                    exp: 'Đúng. Tại $t = 60$ s, lượng bay hơi $\\Delta m = 40$ g $= 0,04$ kg. Áp dụng công thức $L = \\frac{Pt}{\\Delta m} = \\frac{1500 \\cdot 60}{0,04} = 2250000$ J/kg $= 2,25 \\cdot 10^6$ J/kg.' 
                },
                { 
                    id: 'd', 
                    text: 'Việc tiến hành đọc số liệu nhiều lần tại các mốc thời gian khác nhau rồi lấy trung bình sẽ giúp làm giảm thiểu sai số hệ thống của phép đo.', 
                    isTrue: false, 
                    exp: 'Sai. Việc đo nhiều lần để lấy trung bình hoặc vẽ đồ thị chỉ giúp làm giảm sai số ngẫu nhiên (do rung lắc của cân, do mắt đọc sai lệch nhịp đồng hồ). Sai số hệ thống (ví dụ: công suất ấm không đúng 1500 W) thì phép lấy trung bình không thể triệt tiêu được.' 
                }
            ]
        },
        {
            id: 'nhiet_q6',
            image: 'bai6_nhiet.jpg',
            context: '<strong>Câu 6. Phương trình đồ thị nhiệt hóa hơi</strong><br>Sử dụng cảm biến lực và Data Logger, máy tính xuất ra phương trình đường xu hướng (Trendline) biểu diễn sự phụ thuộc của khối lượng nước còn lại $m$ (tính bằng kg) trong một ấm siêu tốc theo thời gian $t$ (tính bằng s) tính từ lúc nước bắt đầu sôi là: $m = 0,850 - 0,001t$. Biết ấm siêu tốc được gắn qua một Oát-kế chỉ giá trị công suất thực không đổi là 2260 W.',
            statements: [
                { 
                    id: 'a', 
                    text: 'Khối lượng nước trong ấm tại thời điểm nước vừa đạt trạng thái sôi là 850 g.', 
                    isTrue: true, 
                    exp: 'Đúng. Tại mốc thời gian $t = 0$, khối lượng $m = 0,850$ kg $= 850$ g.' 
                },
                { 
                    id: 'b', 
                    text: 'Hệ số góc của đồ thị có độ lớn là 0,001 kg/s, đại lượng này cho biết tốc độ khối lượng nước chuyển từ thể lỏng sang thể khí.', 
                    isTrue: true, 
                    exp: 'Đúng. Hàm số có dạng $y = ax + b$ với $a = -0,001$. Độ lớn $|a| = 0,001$ kg/s chính là tốc độ hóa hơi (cứ mỗi giây có 1 gam nước bay hơi).' 
                },
                { 
                    id: 'c', 
                    text: 'Biểu thức xác định nhiệt hóa hơi riêng $L$ thông qua đồ thị được tính bằng tích của công suất $P$ và độ lớn hệ số góc của đường thẳng đó.', 
                    isTrue: false, 
                    exp: 'Sai. Từ công thức cơ bản: $Pt = L \\cdot \\Delta m \\Rightarrow \\frac{\\Delta m}{t} = \\frac{P}{L}$. Khối lượng hóa hơi chia thời gian ($\\frac{\\Delta m}{t}$) chính là độ lớn hệ số góc. Do đó $|a| = \\frac{P}{L} \\Rightarrow L = \\frac{P}{|a|}$. Phép tính đúng phải là thương số, không phải tích số.' 
                },
                { 
                    id: 'd', 
                    text: 'Giá trị nhiệt hóa hơi riêng của nước thu được từ phương pháp kết nối Data Logger này là $2,26 \\cdot 10^6$ J/kg.', 
                    isTrue: true, 
                    exp: 'Đúng. Thay số vào biểu thức $L = \\frac{P}{|a|} = \\frac{2260}{0,001} = 2260000$ J/kg $= 2,26 \\cdot 10^6$ J/kg.' 
                }
            ]
        },
        {
            id: 'nhiet_q7',
            image: 'bai7_nhiet.jpg',
            context: '<strong>Câu 7. Phân tích hao phí nhiệt trong thí nghiệm vật rắn</strong><br>Để đo nhiệt dung riêng của đồng, học sinh treo thỏi đồng khối lượng 100 g vào nồi nước đang sôi (100°C) cho đủ thời gian. Sau đó, nhấc nhanh thỏi đồng sang nhiệt lượng kế chứa 200 g nước ở 20,0°C. Khuấy đều đến khi cân bằng, nhiệt kế chỉ 24,0°C. Biết nhiệt dung riêng của nước là 4200 J/(kg.K). Coi nhiệt lượng kế hoàn toàn không hấp thụ nhiệt.',
            statements: [
                { 
                    id: 'a', 
                    text: 'Nhiệt lượng mà phần nước lỏng trong nhiệt lượng kế thu vào để tăng nhiệt độ là 3360 J.', 
                    isTrue: true, 
                    exp: 'Đúng. $Q_{\\text{thu}} = m_{\\text{nước}}c_{\\text{nước}}(T_{\\text{cb}} - T_{\\text{bđ nước}}) = 0,2 \\cdot 4200 \\cdot (24,0 - 20,0) = 3360$ J.' 
                },
                { 
                    id: 'b', 
                    text: 'Giá trị nhiệt dung riêng của đồng tính toán từ các số liệu lí tưởng trên xấp xỉ 442 J/(kg.K).', 
                    isTrue: true, 
                    exp: 'Đúng. Áp dụng phương trình $Q_{\\text{tỏa}} = Q_{\\text{thu}} \\Rightarrow m_{\\text{Cu}}c_{\\text{Cu}}(T_{\\text{bđ Cu}} - T_{\\text{cb}}) = 3360 \\Rightarrow 0,1 \\cdot c_{\\text{Cu}} \\cdot (100 - 24,0) = 3360 \\Rightarrow c_{\\text{Cu}} = \\frac{3360}{7,6} \\approx 442$ J/(kg.K).' 
                },
                { 
                    id: 'c', 
                    text: 'Khi di chuyển thỏi đồng từ nồi nước sôi sang nhiệt lượng kế, nếu có một ít nước sôi mang theo nhiệt độ 100°C bám dính trên thỏi đồng rơi vào trong nhiệt lượng kế thì kết quả $c_{Cu}$ thu được sẽ bị nhỏ hơn giá trị thực.', 
                    isTrue: false, 
                    exp: 'Sai. Nước sôi bám vào sẽ mang theo một lượng nhiệt rất lớn truyền cho nhiệt lượng kế, làm hệ cân bằng ở nhiệt độ $T_{\\text{cb}}$ cao hơn. Nếu học sinh không biết điều này và vẫn coi toàn bộ lượng nhiệt làm tăng $\\Delta T$ đó chỉ do thỏi đồng cung cấp, công thức tính sẽ cho ra giá trị $c_{\\text{Cu}}$ lớn hơn giá trị thực tế.' 
                },
                { 
                    id: 'd', 
                    text: 'Việc thực hiện thao tác nhấc thỏi đồng di chuyển qua không khí quá chậm chạp là một nguyên nhân làm cho nhiệt độ cân bằng thực tế của hệ đo được thấp hơn 24,0°C.', 
                    isTrue: true, 
                    exp: 'Đúng. Chuyển chậm sẽ khiến thỏi đồng truyền nhiệt trực tiếp ra môi trường không khí xung quanh trước khi kịp nhúng vào nhiệt lượng kế. Vì hệ bị hao hụt năng lượng gốc nên nhiệt độ cân bằng cuối cùng sẽ không đạt được mức 24,0°C như tính toán lí thuyết.' 
                }
            ]
        },
        {
            id: 'nhiet_q8',
            context: '<strong>Câu 8. Kỹ thuật hiệu chuẩn thiết bị (Bước đệm đo công suất thực)</strong><br>Để loại bỏ sai số hệ thống do điện lưới sụt giảm làm công suất của ấm đun không đúng nhãn, học sinh phải đo công suất thực $P$ của ấm trước khi đo nhiệt hóa hơi. Cho 500 g nước ở 25,0°C vào ấm, bật công tắc và đồng thời bấm giờ. Sau đúng 120 s, ngắt điện, khuấy đều và đo được nhiệt độ đạt 65,0°C. (Cho $c_{\\text{nước}} = 4200$ J/(kg.K)). Bỏ qua nhiệt dung của vỏ ấm điện.',
            statements: [
                { 
                    id: 'a', 
                    text: 'Phương trình dùng để xác định công suất hữu ích trong giai đoạn đun nước tăng nhiệt độ này là $P = \\frac{mc(T_2 - T_1)}{t}$.', 
                    isTrue: true, 
                    exp: 'Đúng. Dựa vào định luật bảo toàn năng lượng, điện năng tiêu thụ chuyển thành nhiệt lượng làm tăng nhiệt độ của khối nước: $Pt = mc\\Delta T$, từ đó suy ra $P$.' 
                },
                { 
                    id: 'b', 
                    text: 'Công suất thực tế của ấm đun theo số liệu hiệu chuẩn này tính được là 700 W.', 
                    isTrue: true, 
                    exp: 'Đúng. $P = \\frac{0,5 \\cdot 4200 \\cdot (65,0 - 25,0)}{120} = \\frac{84000}{120} = 700$ W.' 
                },
                { 
                    id: 'c', 
                    text: 'Nếu trong 120 s đun nước ở trên, học sinh không đậy nắp ấm làm một lượng hơi nước bay ra ngoài thì công suất $P$ tính được bằng công thức trên sẽ lớn hơn công suất thực của bếp.', 
                    isTrue: false, 
                    exp: 'Sai. Nếu nước bay hơi, dòng điện phải tốn thêm năng lượng để cung cấp nhiệt hóa hơi cho phần nước thoát đi đó. Năng lượng này không đóng góp vào việc làm tăng nhiệt độ nước còn lại lên $T_2$, dẫn đến giá trị $(T_2 - T_1)$ thực tế bị đo thấp đi so với nếu đậy nắp kín. Khi thế $(T_2 - T_1)$ nhỏ vào công thức, $P$ tính ra sẽ bị nhỏ hơn công suất thực tế.' 
                },
                { 
                    id: 'd', 
                    text: 'Trong thí nghiệm đo nhiệt hóa hơi riêng ngay sau đó, học sinh phải dùng chính giá trị công suất thực vừa tìm được này đưa vào phương trình tính toán thay vì dùng thông số của nhà sản xuất.', 
                    isTrue: true, 
                    exp: 'Đúng. Đây là kỹ thuật "thực nghiệm tuần tự" rất kinh điển, dùng đại lượng đo thực tế của phòng lab tại thời điểm đó để giải bài toán tiếp theo nhằm đảm bảo tính chính xác và loại trừ sai số hệ thống về thiết bị.' 
                }
            ]
        },
        {
            id: 'nhiet_q9',
            context: '<strong>Câu 9. Phân tích truyền sai số tỉ đối trong thực hành đo nhiệt hóa hơi</strong><br>Kết thúc một thí nghiệm, học sinh lập bảng tổng hợp số liệu của các đại lượng đo trực tiếp cùng với sai số tuyệt đối tương ứng như sau:<br>Công suất đo qua Oát-kế: $P = 1000 \\pm 20$ (W).<br>Thời gian đun sôi: $t = 100 \\pm 1$ (s).<br>Khối lượng nước hóa hơi: $\\Delta m = 40,0 \\pm 0,8$ (g).',
            statements: [
                { 
                    id: 'a', 
                    text: 'Công thức để xác định sai số tuyệt đối của thời gian đun là $\\Delta t = \\frac{\\Delta t_{\\text{dụng cụ}} + \\Delta t_{\\text{ngẫu nhiên}}}{2}$.', 
                    isTrue: false, 
                    exp: 'Sai. Công thức tính sai số tuyệt đối của một phép đo trực tiếp là tổng (không phải trung bình cộng) của sai số dụng cụ và sai số ngẫu nhiên: $\\Delta t = \\Delta t_{\\text{dụng cụ}} + \\Delta t_{\\text{ngẫu nhiên}}$.' 
                },
                { 
                    id: 'b', 
                    text: 'Giá trị trung bình của nhiệt hóa hơi riêng $\\bar{L}$ là $2,50 \\cdot 10^6$ J/kg.', 
                    isTrue: true, 
                    exp: 'Đúng. $\\bar{L} = \\frac{\\bar{P}\\bar{t}}{\\overline{\\Delta m}} = \\frac{1000 \\cdot 100}{0,040} = 2500000$ J/kg $= 2,50 \\cdot 10^6$ J/kg.' 
                },
                { 
                    id: 'c', 
                    text: 'Từ bảng số liệu có thể nhận thấy, mức độ kém chính xác (đánh giá bằng sai số tỉ đối) của dụng cụ đo khối lượng lớn hơn so với dụng cụ đo công suất $P$.', 
                    isTrue: false, 
                    exp: 'Sai. Sai số tỉ đối của khối lượng là $\\delta (\\Delta m) = \\frac{0,8}{40,0} = 0,02 = 2\\%$. Sai số tỉ đối của công suất là $\\delta P = \\frac{20}{1000} = 0,02 = 2\\%$. Mức độ sai số tỉ đối của hai dụng cụ này là bằng nhau.' 
                },
                { 
                    id: 'd', 
                    text: 'Sai số tỉ đối của kết quả đo nhiệt hóa hơi riêng $\\delta L$ có giá trị bằng 5,0%.', 
                    isTrue: true, 
                    exp: 'Đúng. Theo nguyên tắc truyền sai số của một biểu thức nhân/chia, sai số tỉ đối của kết quả đo gián tiếp bằng tổng các sai số tỉ đối của các đại lượng trực tiếp tạo nên nó: $\\delta L = \\delta P + \\delta t + \\delta (\\Delta m) = 2\\% + 1\\% + 2\\% = 5,0\\%$.' 
                }
            ]
        },
        {
            id: 'nhiet_q10',
            image: 'bai10_nhiet.png',
            context: '<strong>Câu 10. Vai trò dụng cụ & Cải tiến thiết kế thiết bị</strong><br>Tại phòng thực hành, nhóm học sinh được trang bị cảm biến nhiệt độ nối với máy tính, hộp xốp cách nhiệt (Styrofoam) và bộ trộn chất lỏng. Nhóm dùng các thiết bị này để đánh giá và tìm cách nâng cao độ chính xác của các bài thí nghiệm nhiệt học.',
            statements: [
                { 
                    id: 'a', 
                    text: 'Cảm biến nhiệt độ kỹ thuật số có khả năng ngăn chặn hiện tượng tỏa nhiệt từ nhiệt lượng kế ra môi trường tốt hơn so với nhiệt kế thủy ngân cổ điển.', 
                    isTrue: false, 
                    exp: 'Sai. Cảm biến nhiệt độ chỉ thay đổi phương thức ghi nhận và hiển thị số liệu (nhạy hơn, tránh sai số do mắt nhìn). Nó không hề có bản chất vật lí nào giúp cản trở hay ngăn chặn sự truyền nhiệt lượng giữa nhiệt lượng kế và môi trường.' 
                },
                { 
                    id: 'b', 
                    text: 'Lớp vỏ xốp cách nhiệt (Styrofoam) có cấu tạo chủ yếu là các bọt khí bị giữ chặt bên trong cấu trúc polymer, lợi dụng tính dẫn nhiệt cực kì kém của không khí tĩnh để chống thất thoát nhiệt.', 
                    isTrue: true, 
                    exp: 'Đúng. Xốp EPS gồm khoảng 98% là không khí. Không khí bị nhốt trong các khoang kín không thể hình thành dòng đối lưu, cộng với độ dẫn nhiệt tự nhiên rất thấp, biến xốp thành vật liệu cách nhiệt lí tưởng.' 
                },
                { 
                    id: 'c', 
                    text: 'Ưu điểm vượt trội của việc kết nối cảm biến với Data Logger là phần mềm có khả năng vẽ trực tiếp đồ thị nhiệt độ - thời gian ngay trong lúc thí nghiệm đang diễn ra.', 
                    isTrue: true, 
                    exp: 'Đúng. Khả năng thu thập số liệu tự động và hiển thị đồ thị Real-time giúp học sinh lập tức phát hiện các điểm dữ liệu bất thường và dễ dàng tìm được hệ số góc tuyến tính của quá trình.' 
                },
                { 
                    id: 'd', 
                    text: 'Việc đậy kín nắp nhiệt lượng kế trong suốt quá trình đun sẽ triệt tiêu hoàn toàn sự trao đổi nhiệt bằng hình thức bức xạ nhiệt.', 
                    isTrue: false, 
                    exp: 'Sai. Đậy kín nắp chủ yếu ngăn chặn sự thất thoát nhiệt do đối lưu không khí (luồng khí nóng bay lên) và bay hơi mang theo nhiệt. Hiện tượng bức xạ nhiệt (truyền nhiệt dưới dạng sóng điện từ hồng ngoại) vẫn có thể đi xuyên qua vỏ/nắp bình ra ngoài nếu bề mặt bình không được tráng một lớp phản xạ ánh sáng (như lớp tráng bạc trong ruột phích).' 
                }
            ]
        }
    ],
    'khili-tuong': [
    {
        id: 'khi_q11',
        image: 'bai1_khi.png',
        context: '<strong>Câu 1. Quy trình đo đạc Định luật Boyle bằng cảm biến áp suất</strong><br>Một nhóm học sinh sử dụng xilanh nhựa trong suốt có vạch chia thể tích (đơn vị mL), đầu xilanh nối kín với cảm biến áp suất Vernier. Đặt xilanh nằm ngang trên bàn. Ban đầu, kéo pittông để khối khí có thể tích $V_1 = 50,0$ mL, áp suất đo được là $p_1 = 100$ kPa. Nhóm tiến hành đẩy pittông để giảm dần thể tích, ghi nhận áp suất tương ứng. Nhiệt độ phòng duy trì ở 25°C.',
        statements: [
            { id: 'a', text: 'Để đảm bảo quá trình thực nghiệm đúng với điều kiện của định luật Boyle, học sinh cần ấn pittông thật nhanh và đọc số liệu trên cảm biến ngay lập tức.', isTrue: false, exp: 'Sai. Ấn nhanh sẽ thực hiện một quá trình nén đoạn nhiệt. Công cơ học sẽ chuyển hóa làm tăng nội năng, khiến khối khí nóng lên (nhiệt độ tăng). Định luật Boyle yêu cầu quá trình phải đẳng nhiệt, do đó phải nén thật chậm hoặc nén xong phải chờ vài phút để khí tỏa nhiệt ra môi trường, cân bằng lại ở 25°C rồi mới đọc số liệu.' },
            { id: 'b', text: 'Cảm biến sử dụng trong thí nghiệm này phải được cài đặt ở chế độ đo áp suất tuyệt đối (Absolute Pressure) chứ không phải áp suất dư (Gauge Pressure).', isTrue: true, exp: 'Đúng. Phương trình trạng thái $pV = nRT$ yêu cầu $p$ là áp suất tuyệt đối. Nếu dùng áp suất dư (chỉ đo phần chênh lệch so với khí quyển), tích số $pV$ sẽ không ra hằng số.' },
            { id: 'c', text: 'Nếu ở bước tiếp theo, thể tích khí được nén đến $V_2 = 25,0$ mL (giảm một nửa) trong điều kiện đẳng nhiệt lí tưởng, cảm biến sẽ chỉ mức $p_2 = 200$ kPa.', isTrue: true, exp: 'Đúng. Theo định luật Boyle, $p$ tỉ lệ nghịch với $V$. Khi $V$ giảm 2 lần thì $p$ tăng 2 lần: $p_2 = p_1 \\cdot \\frac{V_1}{V_2} = 100 \\cdot \\frac{50}{25} = 200$ kPa.' },
            { id: 'd', text: 'Việc xoa một lớp mỏng dầu bôi trơn dọc theo vành cao su của pittông trước khi làm thí nghiệm là thao tác nhằm giảm sai số hệ thống do rò rỉ khí.', isTrue: true, exp: 'Đúng. Dầu bôi trơn vừa làm giảm ma sát (giúp đẩy nhẹ tay hơn, ít sinh nhiệt bề mặt), vừa đóng vai trò như một lớp gioăng kín khí, ngăn chặn các phân tử khí thoát ra ngoài làm thay đổi số mol $n$ của hệ.' }
        ]
    },
    {
        id: 'khi_q12',
        image: 'bai2_khi.png',
        context: '<strong>Câu 2. Khảo sát Định luật Charles bằng ống mao dẫn</strong><br>Để khảo sát dãn nở đẳng áp, học sinh dùng một ống mao dẫn thủy tinh dài, tiết diện đều, một đầu bịt kín, đầu kia hở hướng lên trên. Một giọt thủy ngân dài $h = 15$ mm được nhỏ vào ống để nhốt một cột không khí. Nhúng ngập phần chứa không khí của ống vào một bình đun nước (Water bath) có gắn nhiệt kế kỹ thuật số. Áp suất khí quyển là $p_0 = 760$ mmHg. Bỏ qua sự dãn nở của thủy tinh.',
        statements: [
            { id: 'a', text: 'Khối lượng không khí bị nhốt bên trong ống luôn chịu một áp suất không đổi là 775 mmHg trong suốt quá trình đun nóng nước.', isTrue: true, exp: 'Đúng. Áp suất khí nhốt $p = p_0 + p_{Hg} = 760 + 15 = 775$ mmHg. Vì miệng ống luôn hở lên trên và khối lượng giọt thủy ngân không đổi nên áp suất này cố định (quá trình đẳng áp).' },
            { id: 'b', text: 'Trong quá trình gia nhiệt, chiều dài của cột không khí tỉ lệ thuận với nhiệt độ bách phân $t$ (đo bằng °C).', isTrue: false, exp: 'Sai. Theo định luật Charles, thể tích $V$ (và chiều dài $L$) tỉ lệ thuận với nhiệt độ tuyệt đối $T$ (thang Kelvin). Mối liên hệ với nhiệt độ $t$ là hàm bậc nhất dạng $L = a \\cdot t + b$, không phải đồ thị tỉ lệ thuận đi qua gốc tọa độ.' },
            { id: 'c', text: 'Để kết quả đo chính xác, học sinh phải đảm bảo toàn bộ chiều dài của cột không khí bị nhốt phải nằm chìm hoàn toàn dưới mặt nước trong bình đun.', isTrue: true, exp: 'Đúng. Điều này đảm bảo toàn bộ khối khí có nhiệt độ đồng đều và bằng đúng với nhiệt độ của nước mà nhiệt kế đang đo.' },
            { id: 'd', text: 'Nếu đun nước đến nhiệt độ quá cao khiến một phần nhỏ thủy ngân bị bay hơi, kết quả nghiệm đúng định luật Charles vẫn không bị ảnh hưởng vì áp suất khí quyển $p_0$ không đổi.', isTrue: false, exp: 'Sai. Nếu thủy ngân bay hơi, khối lượng giọt chất lỏng giảm dẫn đến cột áp $p_{Hg}$ giảm. Áp suất tổng cộng $p = p_0 + p_{Hg}$ sẽ bị thay đổi. Quá trình mất đi tính đẳng áp, gây sai số nghiêm trọng.' }
        ]
    },
    {
        id: 'khi_q13',
        context: '<strong>Câu 3. Phát hiện lỗi thực nghiệm qua bảng số liệu Định luật Boyle</strong><br>Học sinh thực hiện nén đẳng nhiệt khối khí trong xilanh và thu được bảng số liệu sau:<br>(Lần 1) $V = 20,0$ mL ; $p = 100$ kPa<br>(Lần 2) $V = 16,0$ mL ; $p = 126$ kPa<br>(Lần 3) $V = 12,0$ mL ; $p = 170$ kPa<br>(Lần 4) $V = 10,0$ mL ; $p = 208$ kPa',
        statements: [
            { id: 'a', text: 'Tích số $p \\cdot V$ của lần đo thứ 4 lớn hơn tích số $p \\cdot V$ của lần đo thứ 1.', isTrue: true, exp: 'Đúng. Lần 1: $100 \\cdot 20,0 = 2000$. Lần 4: $208 \\cdot 10,0 = 2080$. Tích số đã tăng lên ($2080 > 2000$).' },
            { id: 'b', text: 'Sự gia tăng liên tục của tích số $p \\cdot V$ qua các lần đo chứng tỏ đã có một lượng không khí rò rỉ từ ngoài vào trong xilanh.', isTrue: false, exp: 'Sai. Áp suất trong xilanh ($100$ - $208$ kPa) luôn lớn hơn hoặc bằng áp suất khí quyển (~$100$ kPa). Nếu có rò rỉ, khí chỉ có thể xì từ trong ra ngoài (làm số mol $n$ giảm). Tích $p \\cdot V$ tăng chứng tỏ lỗi không phải do rò rỉ.' },
            { id: 'c', text: 'Nguyên nhân chính của hiện tượng tích $p \\cdot V$ tăng dần này là do học sinh đã nén pittông liên tục mà không chờ hệ tỏa nhiệt để cân bằng lại nhiệt độ phòng.', isTrue: true, exp: 'Đúng. Việc nén nhanh khiến khí sinh nhiệt, nhiệt độ $T$ tăng lên. Theo phương trình $p \\cdot V = nRT$, khi $T$ tăng thì tích $p \\cdot V$ sẽ tăng theo, lớn hơn giá trị hằng số ở nhiệt độ phòng.' },
            { id: 'd', text: 'Nếu dùng số liệu của Lần 1 và Lần 4 để tính sai số tương đối (so với giá trị ở Lần 1), thì sai số của tích $p \\cdot V$ do hiệu ứng tăng nhiệt này gây ra là 4,0%.', isTrue: true, exp: 'Đúng. Độ chênh lệch: $\\Delta (pV) = 2080 - 2000 = 80$. Sai số tương đối: $\\delta = \\frac{80}{2000} \\cdot 100\\% = 4,0\\%$.' }
        ]
    },
    {
        id: 'khi_q14',
        context: '<strong>Câu 4. Đo nhiệt độ không tuyệt đối bằng phương pháp ngoại suy đồ thị</strong><br>Từ thí nghiệm ống mao dẫn (Định luật Charles), học sinh thu được hai điểm dữ liệu về nhiệt độ $t$ (theo thang bách phân) và chiều dài cột khí $L$: Điểm A ($t_1 = 20°C$, $L_1 = 10,0$ cm) và Điểm B ($t_2 = 80°C$, $L_2 = 12,0$ cm). Giả sử hàm phụ thuộc là tuyến tính $L = a \\cdot t + b$.',
        statements: [
            { id: 'a', text: 'Hệ số góc $a$ của đường thẳng đi qua 2 điểm dữ liệu này có giá trị là 1/30 cm/°C.', isTrue: true, exp: 'Đúng. $a = \\frac{L_2 - L_1}{t_2 - t_1} = \\frac{12,0 - 10,0}{80 - 20} = \\frac{2,0}{60} = \\frac{1}{30}$ cm/°C.' },
            { id: 'b', text: 'Tại nhiệt độ 0°C, chiều dài lí thuyết của cột khí là $b = 9,33$ cm.', isTrue: true, exp: 'Đúng. Thay điểm A vào phương trình: $10,0 = \\frac{1}{30} \\cdot 20 + b \\Rightarrow b = 10,0 - \\frac{20}{30} = \\frac{28}{3} \\approx 9,33$ cm.' },
            { id: 'c', text: 'Theo kết quả đo đạc này, nhiệt độ không tuyệt đối (khi thể tích khí triệt tiêu $L = 0$) được ngoại suy xấp xỉ bằng -280°C.', isTrue: true, exp: 'Đúng. Giải phương trình khi $L = 0$: $0 = \\frac{1}{30} \\cdot t + \\frac{28}{3} \\Rightarrow t = -280$ °C.' },
            { id: 'd', text: 'Nguyên nhân chính làm cho giá trị ngoại suy (-280°C) sai lệch so với giá trị chuẩn (-273,15°C) là do học sinh đã không tính đến sự dãn nở vì nhiệt của vỏ ống thủy tinh.', isTrue: true, exp: 'Đúng. Khi nhiệt độ tăng, ống thủy tinh cũng dãn nở làm tiết diện $S$ của ống to ra. Cùng một thể tích nhưng tiết diện to hơn nên chiều cao $L$ đo được sẽ thấp hơn thực tế. Điều này làm độ dốc $a$ bị nhỏ đi, khiến giao điểm cắt trục hoành bị lùi xa hơn về phía âm.' }
        ]
    },
    {
        id: 'khi_q15',
        image: 'bai5_khi.png',
        context: '<strong>Câu 5. Kỹ thuật "Tuyến tính hóa" đồ thị Định luật Boyle</strong><br>Khi biểu diễn dữ liệu của Định luật Boyle, đồ thị $p$ theo $V$ là một đường Hypebol cong, rất khó để kẻ đường xu hướng trung bình (Trendline) bằng mắt hay thước thẳng. Để khắc phục, sinh viên thực hành lập một cột dữ liệu mới $x = \\frac{1}{V}$ và vẽ đồ thị $p$ theo đại lượng $x$ này.',
        statements: [
            { id: 'a', text: 'Phương trình lý thuyết của đồ thị mới có dạng $p = (nRT) \\cdot x$.', isTrue: true, exp: 'Đúng. Xuất phát từ $pV = nRT \\Rightarrow p = nRT \\cdot \\left(\\frac{1}{V}\\right) = (nRT) \\cdot x$.' },
            { id: 'b', text: 'Đồ thị của $p$ theo $x$ là một đường thẳng đi qua gốc tọa độ O, điều này giúp việc nhận diện các điểm dữ liệu bị lỗi trở nên trực quan và dễ dàng hơn.', isTrue: true, exp: 'Đúng. Đây chính là mục đích cốt lõi của phương pháp hóa tuyến tính đồ thị trong phòng Lab. Các điểm sai số sẽ bị chệch ra khỏi đường thẳng rất rõ ràng.' },
            { id: 'c', text: 'Hệ số góc của đường đồ thị $p$ theo $x$ có đơn vị vật lí tương đương với đơn vị của Công (Joule).', isTrue: true, exp: 'Đúng. Hệ số góc $k = \\frac{p}{x} = p \\cdot V$. Áp suất $p$ ($\\text{N/m}^2$) nhân với thể tích $V$ ($\\text{m}^3$) sẽ ra $\\text{N}\\cdot\\text{m}$, chính là đơn vị Joule (J).' },
            { id: 'd', text: 'Nếu thực hiện lại thí nghiệm ở một nhiệt độ phòng lạnh hơn, đường đồ thị $p$ theo $x$ mới sẽ dốc hơn (hệ số góc lớn hơn) so với đường ban đầu.', isTrue: false, exp: 'Sai. Hệ số góc của đồ thị là $k = nRT$. Khi nhiệt độ $T$ giảm (trời lạnh hơn), hệ số góc $k$ phải giảm xuống, đồ thị sẽ thoải hơn (ít dốc hơn).' }
        ]
    },
    {
        id: 'khi_q16',
        image: 'bai6_khi.png',
        context: '<strong>Câu 6. Phương pháp cột thủy ngân (Ống chữ U) khảo sát quá trình đẳng nhiệt</strong><br>Sử dụng ống thủy tinh hình chữ U tiết diện đều $S$, nhánh trái bịt kín, nhánh phải hở ra khí quyển. Ban đầu ở nhiệt độ $T_0$, đổ thủy ngân vào ống sao cho hai mực thủy ngân ngang nhau, cột khí bên nhánh trái dài $L_1 = 20,0$ cm. Áp suất khí quyển $p_0 = 760$ mmHg. Từ từ rót thêm thủy ngân vào nhánh phải để nén khí. Bỏ qua sự thay đổi nhiệt độ phòng.',
        statements: [
            { id: 'a', text: 'Ở trạng thái ban đầu, áp suất của khối khí bị nhốt trong nhánh trái bằng đúng 760 mmHg.', isTrue: true, exp: 'Đúng. Hai nhánh có cùng mực chất lỏng thông nhau nên áp suất bằng nhau: $p_1 = p_0 = 760$ mmHg.' },
            { id: 'b', text: 'Sau khi rót thêm thủy ngân vào nhánh phải, mực thủy ngân ở nhánh hở (phải) sẽ luôn thấp hơn mực thủy ngân ở nhánh kín (trái).', isTrue: false, exp: 'Sai. Khi rót thêm, khí nhánh trái bị nén nên áp suất $p_2 > p_0$. Để cân bằng, mặt thoáng nhánh phải phải chịu thêm một cột áp thủy tĩnh, do đó mực thủy ngân nhánh phải phải cao hơn nhánh trái.' },
            { id: 'c', text: 'Rót đến khi chiều dài cột khí ở nhánh trái chỉ còn $L_2 = 16,0$ cm, áp suất khối khí lúc này là 950 mmHg.', isTrue: true, exp: 'Đúng. Quá trình đẳng nhiệt: $p_1 V_1 = p_2 V_2 \\Leftrightarrow 760 \\cdot (20,0 \\cdot S) = p_2 \\cdot (16,0 \\cdot S) \\Rightarrow p_2 = 760 \\cdot \\frac{20}{16} = 950$ mmHg.' },
            { id: 'd', text: 'Độ chênh lệch mặt thoáng thủy ngân giữa hai nhánh (nhánh phải cao hơn nhánh trái) ở trạng thái sau cùng là 19,0 cm.', isTrue: true, exp: 'Đúng. Chênh lệch áp suất $\\Delta p = p_2 - p_0 = 950 - 760 = 190$ mmHg. Tương ứng với cột thủy ngân cao $190\\text{ mm} = 19,0\\text{ cm}$.' }
        ]
    },
    {
        id: 'khi_q17',
        image: 'bai7_khi.png',
        context: '<strong>Câu 7. Thí nghiệm dãn nở đẳng áp với bình cầu và xilanh (Định luật Charles)</strong><br>Một bình cầu thủy tinh có thể tích ruột $V_0 = 250$ mL được nối kín bằng một ống nhựa nhỏ mềm vào một xilanh nằm ngang. Pittông của xilanh có thể di chuyển trơn tru không ma sát. Ban đầu, toàn bộ bình cầu và xilanh chứa không khí ở nhiệt độ $T_1 = 300$ K, số chỉ trên xilanh là $V_{\\text{xilanh } 1} = 10,0$ mL. (Bỏ qua thể tích ống nối). Ngâm bình cầu vào chậu nước nóng, chờ hệ cân bằng ở nhiệt độ $T_2 = 330$ K.',
        statements: [
            { id: 'a', text: 'Thể tích ban đầu của khối khí trong hệ thống là 260,0 mL.', isTrue: true, exp: 'Đúng. $V_1 = V_{\\text{bình}} + V_{\\text{xilanh}} = 250 + 10,0 = 260,0$ mL.' },
            { id: 'b', text: 'Việc để pittông xilanh tự do di chuyển là điều kiện bắt buộc để khối khí thực hiện dãn nở trong một quá trình đẳng áp.', isTrue: true, exp: 'Đúng. Pittông tự do giúp áp suất khí bên trong luôn cân bằng với áp suất khí quyển (và ma sát, nếu có) ở bên ngoài. Khi thể tích dãn ra, áp suất không bị tăng lên.' },
            { id: 'c', text: 'Theo tính toán lí thuyết của Định luật Charles, thể tích toàn bộ khối khí ở trạng thái cân bằng mới là 286,0 mL.', isTrue: true, exp: 'Đúng. $\\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\Rightarrow \\frac{260,0}{300} = \\frac{V_2}{330} \\Rightarrow V_2 = 260,0 \\cdot \\frac{330}{300} = 286,0$ mL.' },
            { id: 'd', text: 'Kết thúc thí nghiệm, số chỉ của pittông trên thân xilanh sẽ nằm ở vạch 26,0 mL.', isTrue: false, exp: 'Sai. Thể tích tổng là $286,0$ mL. Vì bình cầu thủy tinh không co dãn (thể tích vẫn chiếm $250$ mL), phần khí dãn nở sẽ bị dồn toàn bộ vào xilanh. Thể tích trong xilanh lúc này là $V_{\\text{xilanh } 2} = 286,0 - 250 = 36,0$ mL. Số chỉ sẽ là $36,0$ chứ không phải $26,0$.' }
        ]
    },
    {
        id: 'khi_q18',
        context: '<strong>Câu 8. Xử lý sự cố rò rỉ khí trong thiết bị</strong><br>Học sinh thực hiện đo $p, V$ của một xilanh theo chiều nén dần. Mặc dù học sinh đã nén rất chậm để đảm bảo nhiệt độ $T$ không đổi, nhưng tích số $p \\cdot V$ vẫn giảm dần qua các lần đo như sau:<br>$V = 50$ mL, $p = 100$ kPa $\\Rightarrow pV = 5000$<br>$V = 40$ mL, $p = 120$ kPa $\\Rightarrow pV = 4800$<br>$V = 30$ mL, $p = 150$ kPa $\\Rightarrow pV = 4500$',
        statements: [
            { id: 'a', text: 'Hiện tượng giảm liên tục của tích $p \\cdot V$ là minh chứng rõ ràng cho việc hở gioăng khiến khí bị xì ra ngoài không khí.', isTrue: true, exp: 'Đúng. Phương trình $p \\cdot V = nRT$. Nếu $T$ đã giữ không đổi mà $pV$ vẫn giảm, điều đó bắt buộc số mol khí $n$ trong xilanh đã bị giảm (khí thoát ra ngoài).' },
            { id: 'b', text: 'Tại thời điểm thể tích nén đến mức 30 mL, đã có đúng 10% lượng phân tử khí ban đầu bị thoát ra ngoài.', isTrue: true, exp: 'Đúng. Tỉ lệ số mol còn lại: $\\frac{n_3}{n_1} = \\frac{p_3 V_3}{p_1 V_1} = \\frac{4500}{5000} = 0,90$. Số lượng khí còn lại là $90\\%$, suy ra đã bị hụt đi $10\\%$.' },
            { id: 'c', text: 'Áp suất đo được tại mốc 30 mL là 150 kPa. Nếu xilanh hoàn toàn kín khí, áp suất lí thuyết lúc này phải đạt 166,7 kPa.', isTrue: true, exp: 'Đúng. Nếu kín khí ($pV = 5000 = \\text{const}$), áp suất lí thuyết khi $V = 30$ mL là $p_{\\text{lt}} = \\frac{5000}{30} = \\frac{500}{3} \\approx 166,7$ kPa.' },
            { id: 'd', text: 'Cách tốt nhất để khắc phục triệt để sai số này mà không cần thay xilanh là cứ đẩy pittông thật nhanh để khí không có đủ thời gian kịp xì qua khe hở.', isTrue: false, exp: 'Sai. Mặc dù nén nhanh làm giảm thời gian xì khí, nhưng nó lại vi phạm nghiêm trọng điều kiện "đẳng nhiệt" (làm nhiệt độ $T$ tăng mạnh). Cách khắc phục đúng là phải làm lại gioăng cao su hoặc bôi thêm mỡ bôi trơn.' }
        ]
    },
    {
        id: 'khi_q19',
        image: 'bai7_khi.png',
        context: '<strong>Câu 9. Phân tích đồ thị sự phụ thuộc của $V$ vào $T$</strong><br>Phần mềm phòng Lab xuất ra đồ thị biểu diễn sự phụ thuộc của thể tích $V$ vào nhiệt độ $T$ (thang Kelvin) của cùng một lượng khí xác định. Đồ thị gồm hai đường thẳng đi qua gốc tọa độ O, tương ứng với hai lần thực hiện thí nghiệm với hai vật nặng khác nhau (có khối lượng $m_A > m_B$) đè lên pittông xilanh. (Áp suất khí quyển xem như cố định).',
        statements: [
            { id: 'a', text: 'Trong mỗi lần thực hiện (ứng với một đường thẳng đồ thị), áp suất của khối khí bị nhốt trong xilanh là tăng dần theo nhiệt độ.', isTrue: false, exp: 'Sai. Pittông gắn vật nặng di chuyển tự do thì áp suất khối khí $p = p_{\\text{kq}} + \\frac{mg}{S} = \\text{const}$. Đây là quá trình đẳng áp, áp suất không tăng.' },
            { id: 'b', text: 'Cả hai đường thẳng đồ thị dãn nở đẳng áp này đều cắt nhau tại điểm gốc tọa độ $(0, 0)$.', isTrue: true, exp: 'Đúng. Định luật Charles $V = k \\cdot T$. Cả hai quá trình dãn nở đẳng áp của khí lí tưởng khi ngoại suy đều hội tụ về thể tích $0$ tại nhiệt độ $0$ K.' },
            { id: 'c', text: 'Đường đồ thị tương ứng với vật nặng $m_A$ sẽ có độ dốc (hệ số góc) nhỏ hơn đường đồ thị của vật nặng $m_B$.', isTrue: true, exp: 'Đúng. Từ phương trình $V = \\left(\\frac{nR}{p}\\right) \\cdot T$. Vì $m_A > m_B$ nên áp suất do pittông A nén lên khí lớn hơn ($p_A > p_B$). Áp suất nằm ở mẫu số, do đó $p_A$ lớn hơn sẽ làm cho hệ số góc $\\left(\\frac{nR}{p_A}\\right)$ nhỏ hơn. Đường đồ thị A nằm dưới đường đồ thị B.' },
            { id: 'd', text: 'Nếu thay khí thực đang đo bằng khí lí tưởng, đường đồ thị $V-T$ sẽ bị bẻ cong thành dạng parabol.', isTrue: false, exp: 'Sai. Khí lí tưởng hoàn toàn tuân theo tuyến tính $V \\sim T$ (đường thẳng). Khí thực mới là tác nhân có thể gây ra những sai lệch phi tuyến ở điều kiện nhiệt độ rất thấp hoặc áp suất rất cao.' }
        ]
    },
    {
        id: 'khi_q20',
        image: 'bai10_khi.png',
        context: '<strong>Câu 10. Nguyên tắc thiết kế và ảnh hưởng của thiết bị đo</strong><br>Một thiết bị khảo sát các định luật chất khí đa năng được thiết kế gồm: Xilanh kim loại thành mỏng, pittông nhẹ có gioăng cao su tốt, cảm biến áp suất tuyệt đối và cảm biến nhiệt độ nhúng sâu vào lòng xilanh.',
        statements: [
            { id: 'a', text: 'Xilanh được làm bằng kim loại thành mỏng giúp khả năng trao đổi nhiệt với môi trường tốt hơn, thuận lợi cho việc giữ khối khí ở trạng thái đẳng nhiệt (Định luật Boyle).', isTrue: true, exp: 'Đúng. Kim loại thành mỏng dẫn nhiệt rất tốt. Khi khí bị nén sinh nhiệt, nhiệt lượng sẽ nhanh chóng tản ra môi trường, giúp nhiệt độ $T$ bên trong nhanh chóng quay về bằng nhiệt độ phòng.' },
            { id: 'b', text: 'Cảm biến áp suất tuyệt đối giúp học sinh có thể dùng trực tiếp số liệu hiển thị trên màn hình để đưa vào phương trình tính toán mà không cần cộng thêm áp suất khí quyển.', isTrue: true, exp: 'Đúng. Phương trình trạng thái khí lí tưởng yêu cầu dùng áp suất tuyệt đối (Absolute pressure).' },
            { id: 'c', text: 'Trong thí nghiệm đo dãn nở đẳng áp, nếu học sinh vô tình tì mạnh tay lên pittông trong lúc ghi nhận thể tích, kết quả đo sẽ không bị ảnh hưởng vì số mol khí không đổi.', isTrue: false, exp: 'Sai. Tì tay lên pittông làm tăng áp lực, dẫn đến áp suất $p$ tăng vọt, phá vỡ môi trường áp suất không đổi (đẳng áp) đang được giả định trong định luật Charles.' },
            { id: 'd', text: 'Việc lựa chọn khối khí ban đầu có thể tích càng nhỏ (càng gần số 0) sẽ càng làm giảm sai số tương đối khi đọc vạch chia thể tích trên xilanh.', isTrue: false, exp: 'Sai. Nếu lấy $V$ quá nhỏ, độ biến thiên thể tích $\\Delta V$ sẽ rất bé. Sai số cực đại do mắt đọc (ví dụ $\\pm 0,5$ mL) sẽ chiếm tỉ trọng rất lớn so với giá trị đo được, làm cho sai số tương đối ($\\frac{\\Delta V}{V} \\cdot 100\\%$) tăng vọt. Cần chọn thể tích đủ lớn để độ phân giải của thang chia mang lại sai số nhỏ.' }
        ]
    }
],
    'tu-truong': [
        {
            id: 'tu_1', image: 'bai1_tu.png',
            context: '<strong>Câu 1. Thí nghiệm Cân từ (Xác định cảm ứng từ $B$)</strong><br>Một khung dây dẫn hình chữ nhật được treo thẳng đứng và gắn vào đĩa của một cân điện tử nhạy. Cạnh dưới của khung dây có chiều dài $\\ell = 5,0$ cm được đặt ngập trong một từ trường đều $\\vec{B}$ có phương nằm ngang và vuông góc với mặt phẳng khung dây. Ban đầu cân chỉ 150,00 g. Khi cho dòng điện $I = 2,0$ A chạy qua khung dây, số chỉ của cân giảm xuống còn 148,50 g. Lấy $g = 9,8$ m/s$^2$.',
            statements: [
                { id: 'a', text: 'Lực từ do từ trường tác dụng lên cạnh dưới của khung dây có hướng thẳng đứng từ trên xuống dưới.', isTrue: false, exp: 'Sai. Số chỉ của cân giảm đi chứng tỏ khung dây bị một lực nâng lên trên. Do đó, lực từ (lực Ampere) tác dụng lên cạnh dưới phải có hướng thẳng đứng từ dưới lên trên.' },
                { id: 'b', text: 'Độ lớn của lực từ tác dụng lên đoạn dây dẫn bằng 0,0147 N.', isTrue: true, exp: 'Đúng. Độ giảm số chỉ của cân chính là do lực từ nâng lên: $F_t = \\Delta m \\cdot g = (150,00 - 148,50) \\cdot 10^{-3} \\cdot 9,8 = 1,5 \\cdot 10^{-3} \\cdot 9,8 = 0,0147$ N.' },
                { id: 'c', text: 'Nếu đảo chiều dòng điện chạy qua khung dây, số chỉ của cân điện tử lúc này sẽ là 151,50 g.', isTrue: true, exp: 'Đúng. Đảo chiều dòng điện làm lực từ đổi chiều (hướng xuống dưới), tạo thêm áp lực lên cân bằng đúng 1,5 g. Số chỉ sẽ là $150,00 + 1,50 = 151,50$ g.' },
                { id: 'd', text: 'Độ lớn cảm ứng từ $B$ của từ trường này xấp xỉ bằng 0,147 T.', isTrue: true, exp: 'Đúng. Áp dụng công thức lực từ $F_t = BI\\ell \\sin(90^\\circ) \\Rightarrow B = \\frac{F_t}{I\\ell} = \\frac{0,0147}{2,0 \\cdot 0,05} = 0,147$ T.' }
            ]
        },
        {
            id: 'tu_2', image: 'bai2_tu.png',
            context: '<strong>Câu 2. Khối phổ kế (Phân tách đồng vị Uranium)</strong><br>Trong công nghệ làm giàu Uranium, người ta dùng khối phổ kế để tách các đồng vị ${}^{235}\\text{U}^+$ và ${}^{238}\\text{U}^+$. Các ion này được tăng tốc bởi cùng một hiệu điện thế $U$ rồi cho bay vào một buồng chân không có từ trường đều $\\vec{B}$ vuông góc với véc-tơ vận tốc. Quỹ đạo của các ion trong từ trường là các nửa đường tròn có bán kính khác nhau và đập vào kính ảnh.',
            statements: [
                { id: 'a', text: 'Lực Lorentz đóng vai trò là lực hướng tâm giữ cho các ion chuyển động theo quỹ đạo tròn.', isTrue: true, exp: 'Đúng. Lực Lorentz ($f = qvB$) luôn vuông góc với vận tốc $\\vec{v}$, gây ra gia tốc hướng tâm làm hạt chuyển động tròn đều.' },
                { id: 'b', text: 'Trong suốt quá trình chuyển động bên trong buồng từ trường, động năng của các ion liên tục tăng lên.', isTrue: false, exp: 'Sai. Lực Lorentz luôn vuông góc với véc-tơ vận tốc nên công của lực này bằng 0 ($A = 0$). Vận tốc chỉ đổi hướng, độ lớn vận tốc và động năng của hạt được bảo toàn (không đổi).' },
                { id: 'c', text: 'Do nặng hơn, ion ${}^{238}\\text{U}^+$ sẽ bay vào buồng từ trường với vận tốc ban đầu $v$ nhỏ hơn so với ion ${}^{235}\\text{U}^+$.', isTrue: true, exp: 'Đúng. Hai hạt có cùng điện tích $q$, được gia tốc bởi cùng hiệu điện thế $U$ nên động năng nhận được là như nhau ($\\frac{1}{2}mv^2 = qU$). Hạt ${}^{238}\\text{U}$ có khối lượng $m$ lớn hơn nên vận tốc $v$ phải nhỏ hơn.' },
                { id: 'd', text: 'Trên kính ảnh, vết đập của chùm ion ${}^{235}\\text{U}^+$ sẽ nằm ở vị trí có bán kính quỹ đạo lớn hơn so với chùm ion ${}^{238}\\text{U}^+$.', isTrue: false, exp: 'Sai. Bán kính quỹ đạo $R = \\frac{mv}{qB} = \\frac{\\sqrt{2m \\cdot qU}}{qB} = \\frac{\\sqrt{2mU}}{B\\sqrt{q}}$. Suy ra $R$ tỉ lệ thuận với căn bậc hai của khối lượng ($\\sqrt{m}$). Do đó, hạt nhẹ hơn (${}^{235}\\text{U}^+$) sẽ có bán kính quỹ đạo $R$ nhỏ hơn.' }
            ]
        },
        {
            id: 'tu_3', image: 'bai4_tu.png',
            context: '<strong>Câu 4. Loa điện động (Ứng dụng lực Ampere)</strong><br>Cấu tạo của một loa điện động gồm một nam châm chữ E có cực từ Bắc (N) ở giữa hình trụ, cực Nam (S) ở vòng ngoài. Ở khe hẹp giữa cực N và cực S có từ trường đều dạng hình tia bán kính. Một cuộn dây âm (Voice coil) hình trụ được quấn và đặt lơ lửng trong khe hẹp này, nối với màng loa. Cho một dòng điện xoay chiều hình sin chạy qua cuộn âm.',
            statements: [
                { id: 'a', text: 'Các đường sức từ trong khe hẹp của nam châm luôn có phương vuông góc với các đoạn dây dẫn quấn trên cuộn âm.', isTrue: true, exp: 'Đúng. Cực N ở tâm, cực S ở ngoài nên đường sức từ tỏa ra như hình nan hoa (phương bán kính). Cuộn dây quấn thành vòng tròn nên tại mọi điểm, đoạn dây luôn vuông góc với đường sức từ ($\\alpha = 90^\\circ$).' },
                { id: 'b', text: 'Khi dòng điện xoay chiều chạy qua, cuộn âm sẽ chịu tác dụng của một lực từ xoay chiều làm nó dao động dọc theo trục của cuộn dây.', isTrue: true, exp: 'Đúng. Theo quy tắc bàn tay trái, lực từ sinh ra luôn đẩy cuộn dây trượt ra trước hoặc kéo thụt vào sau (dọc theo trục). Vì dòng điện là xoay chiều, lực từ đổi chiều liên tục khiến cuộn dây và màng loa dao động.' },
                { id: 'c', text: 'Tần số dao động của màng loa chỉ phụ thuộc vào độ cứng của gân loa chứ không phụ thuộc vào tần số của dòng điện xoay chiều cấp vào.', isTrue: false, exp: 'Sai. Loa hoạt động cưỡng bức theo tín hiệu điện. Tần số dao động của màng loa (và tần số âm thanh phát ra) bằng đúng tần số của dòng điện xoay chiều do amply cấp vào.' },
                { id: 'd', text: 'Để tăng âm lượng (độ lớn của âm thanh) phát ra, người ta có thể sử dụng nam châm có từ trường mạnh hơn để tăng biên độ dao động của màng loa.', isTrue: true, exp: 'Đúng. Biên độ dao động phụ thuộc vào lực từ $F = BIl$. Việc dùng nam châm từ tính mạnh (Neodymium) làm tăng $B$, kéo theo lực $F$ đẩy kéo màng loa lớn hơn $\\rightarrow$ màng loa văng xa hơn $\\rightarrow$ tạo ra sóng âm có biên độ lớn hơn (âm lượng to hơn).' }
            ]
        },
        {
            id: 'tu_4', image: 'bai5_tu.png',
            context: '<strong>Câu 5. Máy gia tốc hạt Cyclotron</strong><br>Cyclotron là máy gia tốc hạt vòng tròn gồm hai hộp kim loại hình chữ D rỗng, đặt trong buồng chân không và nằm trong một từ trường đều $\\vec{B}$ vuông góc với mặt phẳng hai hộp. Người ta đặt vào khe hở giữa hai chữ D một điện áp xoay chiều có tần số $f$. Một proton thoát ra từ nguồn đặt ở tâm hệ thống và bắt đầu chuyển động.',
            statements: [
                { id: 'a', text: 'Điện trường xoay chiều trong khe hở giữa hai chữ D là tác nhân duy nhất làm tăng động năng của hạt proton.', isTrue: true, exp: 'Đúng. Trong nội bộ hộp chữ D không có điện trường (hiệu ứng lồng Faraday), chỉ có từ trường làm hạt quay đầu (không sinh công). Hạt chỉ được gia tốc và nhận thêm động năng nhờ công của lực điện $A = qU$ mỗi khi nó băng qua khe hở.' },
                { id: 'b', text: 'Sau mỗi lần vượt qua khe hở giữa hai chữ D, bán kính quỹ đạo của proton bên trong chữ D sẽ giảm đi.', isTrue: false, exp: 'Sai. Qua khe hở hạt được tăng tốc độ $v$. Bán kính $r = \\frac{mv}{qB}$. Vì $v$ tăng nên bán kính quỹ đạo $r$ phải tăng lên. Quỹ đạo tổng thể là một đường xoắn ốc nở rộng.' },
                { id: 'c', text: 'Chu kì quay của proton trong từ trường không phụ thuộc vào vận tốc của nó, đây là điều kiện tiên quyết để máy Cyclotron hoạt động đồng bộ.', isTrue: true, exp: 'Đúng. Chu kì quay $T = \\frac{2\\pi m}{qB}$ là một hằng số. Dù hạt chạy nhanh hơn thì quỹ đạo cũng lớn hơn, thời gian vẽ xong một nửa vòng luôn bằng $T/2$. Nhờ đó ta chỉ cần giữ tần số điện áp xoay chiều $f_{\\text{điện}} = \\frac{1}{T}$ cố định.' },
                { id: 'd', text: 'Động năng cực đại của chùm proton thoát ra khỏi máy không phụ thuộc vào bán kính $R$ của hai hộp chữ D.', isTrue: false, exp: 'Sai. Hạt thoát ra khi bán kính quỹ đạo chạm đến bán kính $R$ của hộp chữ D. Ta có $v_{\\text{max}} = \\frac{qBR}{m}$. Động năng cực đại $W_{d(\\text{max})} = \\frac{1}{2}mv_{\\text{max}}^2 = \\frac{q^2 B^2 R^2}{2m}$. Rõ ràng nó phụ thuộc rất lớn vào kích thước $R$ của máy.' }
            ]
        },
        {
            id: 'tu_5', image: 'bai6_tu.png',
            context: '<strong>Câu 6. Chuyển động của Electron trong từ trường</strong><br>Một chùm electron (mỗi hạt có khối lượng $m$, điện tích $e$) được bắn vào một vùng không gian có từ trường đều $\\vec{B}$. Nếu gọi $\\vec{v}$ là véc-tơ vận tốc ban đầu của hạt khi vừa lọt vào từ trường.',
            statements: [
                { id: 'a', text: 'Nếu $\\vec{v}$ hợp với $\\vec{B}$ một góc $0^\\circ$ hoặc $180^\\circ$, quỹ đạo của electron là một đường thẳng và nó chuyển động thẳng đều.', isTrue: true, exp: 'Đúng. Khi góc $\\alpha = 0^\\circ$ hoặc $180^\\circ$, lực Lorentz $f = |q|vB\\sin\\alpha = 0$. Theo định luật 1 Newton, hạt không chịu lực tác dụng nên sẽ tiếp tục chuyển động thẳng đều theo quán tính.' },
                { id: 'b', text: 'Nếu $\\vec{v}$ vuông góc với $\\vec{B}$, electron sẽ chuyển động tròn đều với gia tốc có độ lớn là $a = \\frac{eBv}{m}$.', isTrue: true, exp: 'Đúng. Khi $\\alpha = 90^\\circ$, hạt chuyển động tròn đều. Lực Lorentz là lực hướng tâm: $ma = f \\Leftrightarrow m \\cdot a = |e|vB\\sin(90^\\circ) \\Rightarrow a = \\frac{|e|vB}{m}$. (Lưu ý $|e|$ là độ lớn điện tích electron).' },
                { id: 'c', text: 'Nếu $\\vec{v}$ hợp với $\\vec{B}$ một góc $\\alpha$ (với $0^\\circ < \\alpha < 90^\\circ$), electron sẽ chuyển động theo một quỹ đạo xoắn ốc (lò xo) có trục song song với $\\vec{B}$.', isTrue: true, exp: 'Đúng. Vận tốc $\\vec{v}$ được phân tích thành $\\vec{v}_{\\parallel}$ (song song với $\\vec{B}$) và $\\vec{v}_{\\perp}$ (vuông góc với $\\vec{B}$). Thành phần $\\vec{v}_{\\parallel}$ làm hạt đi thẳng đều về phía trước, thành phần $\\vec{v}_{\\perp}$ làm hạt quay tròn $\\rightarrow$ Quỹ đạo tổng hợp là hình lò xo trụ (Helix).' },
                { id: 'd', text: 'Lực Lorentz đóng vai trò sinh công dương làm cho electron tăng tốc khi nó di chuyển theo quỹ đạo xoắn ốc.', isTrue: false, exp: 'Sai. Dù quỹ đạo phức tạp đến đâu, tại mọi thời điểm lực Lorentz luôn vuông góc với véc-tơ vận tốc $\\vec{v}$ thực tế của hạt. Do đó nó không bao giờ sinh công ($A = 0$), động năng và tốc độ của hạt không hề thay đổi.' }
            ]
        },
        {
            id: 'tu_6', image: 'bai7_tu.png',
            context: '<strong>Câu 7. Hiện tượng Đệm từ trường (Lực từ nâng)</strong><br>Một thanh nhôm hình trụ tròn nằm ngang có chiều dài $L = 20,0$ cm, khối lượng $m = 40,0$ g. Hai đầu thanh nhôm được đặt lỏng lẻo trên hai thanh ray dẫn điện. Hệ thống được đặt trong một từ trường đều $\\vec{B}$ nằm ngang và vuông góc với thanh nhôm. Lấy $g = 10$ m/s$^2$.',
            statements: [
                { id: 'a', text: 'Để thanh nhôm có thể lơ lửng (tách khỏi thanh ray) thì lực từ tác dụng lên nó phải hướng thẳng đứng lên trên để triệt tiêu trọng lực.', isTrue: true, exp: 'Đúng. Điều kiện cân bằng là tổng các lực tác dụng bằng 0. Lực từ sinh ra phải ngược chiều với trọng lượng $\\vec{P}$ (đang hướng xuống) $\\rightarrow$ lực từ phải hướng thẳng đứng lên trên.' },
                { id: 'b', text: 'Chiều của dòng điện chạy qua thanh nhôm không ảnh hưởng đến khả năng làm thanh nhôm lơ lửng.', isTrue: false, exp: 'Sai. Áp dụng quy tắc bàn tay trái, với $\\vec{B}$ cố định (nằm ngang), nếu đảo chiều dòng điện $I$ thì lực từ sẽ đảo chiều hướng xuống mặt đất. Khi đó nó ép chặt thanh nhôm xuống ray chứ không thể nâng lên lơ lửng được.' },
                { id: 'c', text: 'Độ lớn của lực từ cần thiết để giữ thanh nhôm lơ lửng nằm ngang là 0,4 N.', isTrue: true, exp: 'Đúng. Lực từ phải cân bằng với trọng lượng: $F = P = mg = 0,040 \\cdot 10 = 0,4$ N.' },
                { id: 'd', text: 'Biết độ lớn cảm ứng từ là $B = 0,2$ T. Để thanh nhôm lơ lửng, dòng điện chạy qua nó phải có cường độ chính xác bằng 10,0 A.', isTrue: true, exp: 'Đúng. Từ phương trình cân bằng $mg = BIL\\sin(90^\\circ) \\Rightarrow I = \\frac{mg}{BL} = \\frac{0,4}{0,2 \\cdot 0,2} = \\frac{0,4}{0,04} = 10,0$ A.' }
            ]
        },
        {
            id: 'tu_7',
            context: '<strong>Câu 1. (Bản chất từ trường và Đường sức từ)</strong><br>Một học sinh dùng mạt sắt rắc lên tấm kính đặt trên một nam châm chữ U để tạo ra từ phổ. Sau đó, dùng các kim nam châm nhỏ đặt tại các vị trí khác nhau để khảo sát.',
            statements: [
                { id: 'a', text: 'Mạt sắt tại khu vực giữa hai cực của nam châm chữ U sắp xếp thành những đường thẳng song song và cách đều nhau, chứng tỏ đây là vùng từ trường đều.', isTrue: true, exp: 'Đúng. Hình ảnh các đường thẳng song song cách đều nhau là đặc trưng vật lí của từ trường đều.' },
                { id: 'b', text: 'Nếu học sinh thay nam châm chữ U bằng một dây dẫn thẳng mang dòng điện một chiều, mạt sắt xung quanh dây dẫn sẽ sắp xếp thành các đường tròn đồng tâm.', isTrue: true, exp: 'Đúng. Từ phổ của dòng điện thẳng dài là các đường tròn đồng tâm nằm trên mặt phẳng vuông góc với dây dẫn.' },
                { id: 'c', text: 'Việc mạt sắt sắp xếp dày đặc ở hai đầu cực của nam châm chứng tỏ độ lớn cảm ứng từ tại đó là nhỏ nhất do các đường sức bị ép sát vào nhau.', isTrue: false, exp: 'Sai. Mật độ đường sức (mạt sắt) càng dày đặc thì cảm ứng từ tại đó càng lớn (từ trường mạnh nhất ở hai cực).' },
                { id: 'd', text: 'Có thể sử dụng hình ảnh của mạt sắt để xác định được chính xác chiều của các đường sức từ.', isTrue: false, exp: 'Sai. Mạt sắt chỉ cho ta hình ảnh về phương và hình dạng (quỹ đạo) của đường sức từ. Để xác định chiều, bắt buộc phải dùng các kim nam châm nhỏ (quy ước ra Bắc vào Nam).' }
            ]
        },
        {
            id: 'tu_8',
            context: '<strong>Câu 2. (Vận dụng Quy tắc bàn tay trái định hướng lực từ)</strong><br>Một đoạn dây dẫn thẳng nằm ngang trên một mặt bàn, mang dòng điện không đổi có chiều từ Đông sang Tây. Người ta đặt hệ thống này vào một vùng từ trường đều có các đường sức từ hướng thẳng đứng từ trên trần nhà xuống mặt bàn.',
            statements: [
                { id: 'a', text: 'Lực từ (lực Ampere) tác dụng lên đoạn dây dẫn có phương song song với mặt bàn.', isTrue: true, exp: 'Đúng. Lực từ luôn vuông góc với véc-tơ cảm ứng từ $\\vec{B}$. Vì $\\vec{B}$ thẳng đứng nên lực từ phải nằm ngang (song song với mặt bàn).' },
                { id: 'b', text: 'Theo quy tắc bàn tay trái, lực từ tác dụng lên đoạn dây có hướng từ Nam chỉ về Bắc.', isTrue: true, exp: 'Đúng. Đặt bàn tay trái: $\\vec{B}$ hướng xuống nên ngửa lòng bàn tay lên trên. Chiều từ cổ tay đến ngón tay hướng từ Đông sang Tây. Khi đó, ngón tay cái choãi ra $90^\\circ$ sẽ chỉ về hướng Bắc.' },
                { id: 'c', text: 'Nếu xoay đoạn dây một góc $90^\\circ$ trên mặt bàn sao cho dòng điện có chiều từ Nam sang Bắc, độ lớn lực từ tác dụng lên đoạn dây sẽ giảm về 0.', isTrue: false, exp: 'Sai. Dù xoay dây trên mặt bàn thì dây vẫn luôn vuông góc với từ trường thẳng đứng ($\\alpha = 90^\\circ$). Do đó, độ lớn lực từ $F = BIL\\sin 90^\\circ$ không thay đổi.' },
                { id: 'd', text: 'Nếu giữ nguyên dây dẫn, chỉ đảo ngược cực của nam châm tạo từ trường (để từ trường hướng từ dưới lên), lực từ sẽ đổi hướng sang phía Nam.', isTrue: true, exp: 'Đúng. Đảo chiều từ trường $\\vec{B}$ (giữ nguyên $I$) thì theo quy tắc bàn tay trái, lực từ $\\vec{F}$ sẽ đảo chiều ngược lại (từ hướng Bắc chuyển sang hướng Nam).' }
            ]
        },
        {
            id: 'tu_9',
            context: '<strong>Câu 3. (Tính toán định lượng Lực từ - Cảm ứng từ)</strong><br>Một đoạn dây dẫn thẳng dài $L = 40$ cm mang dòng điện $I = 2,5$ A được đặt trong một từ trường đều có cảm ứng từ $B = 0,2$ T.',
            statements: [
                { id: 'a', text: 'Nếu đoạn dây được đặt hợp với các đường sức từ một góc $30^\\circ$, độ lớn lực từ tác dụng lên đoạn dây là 0,1 N.', isTrue: true, exp: 'Đúng. Áp dụng công thức: $F = BIL\\sin\\alpha = 0,2 \\cdot 2,5 \\cdot 0,4 \\cdot \\sin 30^\\circ = 0,2 \\cdot 0,5 = 0,1$ N. (Chú ý đổi $40\\text{ cm} = 0,4\\text{ m}$).' },
                { id: 'b', text: 'Để lực từ tác dụng lên đoạn dây đạt giá trị cực đại bằng 0,2 N, học sinh phải đặt đoạn dây vuông góc hoàn toàn với các đường sức từ.', isTrue: true, exp: 'Đúng. $F_{\\text{max}} = BIL\\sin 90^\\circ = 0,2 \\cdot 2,5 \\cdot 0,4 \\cdot 1 = 0,2$ N.' },
                { id: 'c', text: 'Giả sử giữ nguyên từ trường và góc đặt $\\alpha = 90^\\circ$, nếu gập đôi sợi dây lại (tạo thành 2 đoạn song song dài 20 cm) và cho dòng điện 2,5 A chạy qua, tổng lực từ tác dụng lên toàn bộ hệ thống dây gập đôi này là 0,1 N.', isTrue: false, exp: 'Sai. Khi gập đôi dây, dòng điện ở hai nhánh sẽ chạy ngược chiều nhau. Chúng sinh ra hai lực từ cùng phương, ngược chiều và cùng độ lớn. Do đó, tổng lực từ (hợp lực) tác dụng lên hệ thống dây gập đôi sẽ bị triệt tiêu bằng 0 N.' },
                { id: 'd', text: 'Phương và chiều của lực từ hoàn toàn không phụ thuộc vào giá trị của góc đặt dây $\\alpha$ (với điều kiện $\\alpha \\neq 0^\\circ, 180^\\circ$).', isTrue: true, exp: 'Đúng. Góc $\\alpha$ chỉ ảnh hưởng đến độ lớn của lực từ. Phương của lực từ luôn vuông góc với mặt phẳng chứa đoạn dây và $\\vec{B}$, chiều tuân theo quy tắc bàn tay trái.' }
            ]
        },
        {
            id: 'tu_10',
            context: '<strong>Câu 4. (Hệ đơn vị của các đại lượng từ)</strong><br>Khi nghiên cứu các công thức vật lí liên quan đến từ trường, một học sinh lập bảng phân tích các hệ đơn vị đo lường cơ bản.',
            statements: [
                { id: 'a', text: 'Tesla (T) - đơn vị của cảm ứng từ - là một trong 7 đơn vị cơ bản của Hệ đo lường quốc tế (SI).', isTrue: false, exp: 'Sai. Tesla là đơn vị dẫn xuất (được định nghĩa qua Newton, Ampe, mét). Đơn vị điện từ cơ bản duy nhất trong SI là Ampe (A).' },
                { id: 'b', text: 'Dựa vào biểu thức định nghĩa lực từ, ta có thể suy ra $1\\text{ T} = 1\\text{ N} / (\\text{A}\\cdot\\text{m})$.', isTrue: true, exp: 'Đúng. Từ $F = BIL\\sin\\alpha \\Rightarrow B = \\frac{F}{IL\\sin\\alpha}$. Đơn vị của $F$ là N, $I$ là A, $L$ là m $\\Rightarrow 1\\text{ T} = 1\\text{ N} / (\\text{A}\\cdot\\text{m})$.' },
                { id: 'c', text: 'Nếu phân tích hoàn toàn về các đơn vị cơ bản (kg, m, s, A), đơn vị Tesla được biểu diễn là $\\text{kg} / (\\text{A}\\cdot\\text{s}^2)$.', isTrue: true, exp: 'Đúng. Phân tích: $1\\text{ N} = 1\\text{ kg}\\cdot\\text{m/s}^2$. Do đó: $1\\text{ T} = \\frac{\\text{kg}\\cdot\\text{m/s}^2}{\\text{A}\\cdot\\text{m}} = \\frac{\\text{kg}}{\\text{A}\\cdot\\text{s}^2}$.' },
                { id: 'd', text: 'Cảm ứng từ $\\vec{B}$ là đại lượng véc-tơ, đặc trưng cho từ trường về phương diện tác dụng lực.', isTrue: true, exp: 'Đúng. Đây là định nghĩa và ý nghĩa vật lí chuẩn xác của véc-tơ cảm ứng từ.' }
            ]
        },
        {
            id: 'tu_11',
            context: '<strong>Câu 5. (Thực hành: Đo cảm ứng từ bằng cân dòng điện - Phần 1)</strong><br>Học sinh thiết kế một "cân dòng điện" gồm một khung dây hình chữ nhật (có chiều dài đoạn đáy nằm ngang là $L = 5,0$ cm) được treo dưới đĩa của cân điện tử. Phần đáy khung được đặt lọt vào vùng từ trường đều có hướng nằm ngang và vuông góc với khung dây. Lấy $g = 9,8$ m/s$^2$. Bỏ qua từ trường Trái Đất.',
            statements: [
                { id: 'a', text: 'Để phép đo khả thi, chiều của dòng điện chạy qua đoạn dây $L$ phải được chọn sao cho lực từ $\\vec{F}$ sinh ra có phương thẳng đứng.', isTrue: true, exp: 'Đúng. Cân điện tử chỉ đo được áp lực theo phương thẳng đứng. Nếu lực từ có thành phần nằm ngang sẽ làm khung dây bị đung đưa, không đo được. ($\\vec{B}$ nằm ngang, dây nằm ngang $\\rightarrow$ lực từ $\\vec{F}$ tự động thẳng đứng).' },
                { id: 'b', text: 'Trước khi cấp điện cho khung dây, học sinh bắt buộc phải ghi lại số chỉ khối lượng ban đầu của khung dây để tính toán.', isTrue: false, exp: 'Sai. Học sinh hoàn toàn có thể sử dụng nút TARE (trừ bì) trên cân điện tử để đưa số chỉ về 0 khi chưa có dòng điện. Khi cấp điện, số chỉ hiển thị chính là sự chênh lệch $\\Delta m$ do lực từ gây ra.' },
                { id: 'c', text: 'Nếu khi cấp dòng điện $I = 2,0$ A, số chỉ của cân điện tử tăng thêm $\\Delta m = 1,5$ g, chứng tỏ lực từ tác dụng lên đoạn dây $L$ có chiều hướng thẳng đứng xuống dưới.', isTrue: true, exp: 'Đúng. Số chỉ cân tăng lên (tăng áp lực xuống đĩa cân) chứng tỏ có một lực kéo khung dây xuống cùng chiều với trọng lực.' },
                { id: 'd', text: 'Từ dữ liệu trên, độ lớn cảm ứng từ $B$ của nam châm được xác định là 0,147 T.', isTrue: true, exp: 'Đúng. Độ lớn lực từ $F = \\Delta m \\cdot g = 1,5 \\cdot 10^{-3} \\cdot 9,8 = 0,0147$ N. Áp dụng $F = BIL \\Rightarrow B = \\frac{F}{IL} = \\frac{0,0147}{2,0 \\cdot 0,05} = 0,147$ T.' }
            ]
        },
        {
            id: 'tu_12',
            context: '<strong>Câu 6. (Thực hành: Phân tích sai số của cân dòng điện - Phần 2)</strong><br>Trong quá trình xử lí số liệu của thí nghiệm cân dòng điện ở Câu 5, nhóm thực hành thảo luận về các nguyên nhân có thể gây ra sai số cho kết quả đo được.',
            statements: [
                { id: 'a', text: 'Nếu học sinh vô tình đặt khung dây bị lệch sao cho góc giữa đoạn dây $L$ và véc-tơ $\\vec{B}$ chỉ là $85^\\circ$ (thay vì $90^\\circ$), thì giá trị tính toán được của $B$ sẽ nhỏ hơn cảm ứng từ thực tế của nam châm.', isTrue: true, exp: 'Đúng. Khi đặt lệch $\\alpha = 85^\\circ$, lực từ thực tế tác dụng là $F = BIL\\sin 85^\\circ < BIL$. Cân sẽ đo được lực $F$ nhỏ hơn. Tuy nhiên, khi tính toán, học sinh vẫn dùng công thức mặc định $B_{\\text{tính}} = \\frac{F}{IL\\sin 90^\\circ}$. Do tử số bị nhỏ đi, kết quả tính ra sẽ nhỏ hơn thực tế.' },
                { id: 'b', text: 'Nếu nguồn điện một chiều không ổn định, làm cường độ dòng điện $I$ dao động nhẹ trong lúc đọc số chỉ của cân, đây là một sai số hệ thống.', isTrue: false, exp: 'Sai. Sự dao động của dòng điện làm số liệu lúc to lúc nhỏ ngẫu nhiên xung quanh giá trị thực. Đây là sai số ngẫu nhiên, không phải sai số hệ thống (sai số có quy luật một chiều).' },
                { id: 'c', text: 'Hai đoạn dây thẳng đứng nối với đoạn đáy $L$ của khung dây không đóng góp bất kỳ lực từ nào theo phương thẳng đứng làm sai lệch số chỉ của cân.', isTrue: true, exp: 'Đúng. Hai đoạn dây thẳng đứng có dòng điện thẳng đứng, từ trường $\\vec{B}$ nằm ngang, theo quy tắc bàn tay trái, lực từ tác dụng lên 2 đoạn này có phương nằm ngang. Chúng có thể làm căng/ép khung chứ không ảnh hưởng đến áp lực thẳng đứng đặt lên mặt cân.' },
                { id: 'd', text: 'Phương pháp xử lí số liệu tốt nhất là đo $\\Delta m$ tại nhiều giá trị dòng điện $I$ khác nhau, vẽ đồ thị lực từ $F$ theo $I$ và tìm $B$ thông qua hệ số góc của đường thẳng thu được.', isTrue: true, exp: 'Đúng. Đồ thị $F$ theo $I$ có dạng $F = (BL) \\cdot I$, là đường thẳng qua gốc tọa độ. Hệ số góc $k = BL \\Rightarrow B = k/L$. Phương pháp bình phương tối thiểu bằng đồ thị giúp triệt tiêu sai số ngẫu nhiên rất hiệu quả.' }
            ]
        },
        {
            id: 'tu_13',
            context: '<strong>Câu 8. (Khung dây kín trong từ trường đều)</strong><br>Một khung dây dẫn hình chữ nhật MNPQ kín, mang dòng điện $I$, được đặt trong một từ trường đều $\\vec{B}$. Trục quay của khung đi qua trung điểm của hai cạnh đối diện MN và PQ.',
            statements: [
                { id: 'a', text: 'Tổng hợp lực từ (hợp lực tịnh tiến) tác dụng lên toàn bộ khung dây luôn bằng 0 ở bất kì vị trí nào của khung.', isTrue: true, exp: 'Đúng. Trong từ trường đều, lực tác dụng lên các cạnh đối diện tạo thành các cặp lực trực đối $\\rightarrow$ tổng véc-tơ lực bằng 0. Khung không bị tịnh tiến.' },
                { id: 'b', text: 'Dù hợp lực bằng 0, từ trường vẫn có khả năng làm khung dây quay nếu mặt phẳng của khung dây không vuông góc với các đường sức từ.', isTrue: true, exp: 'Đúng. Hợp lực bằng 0 nhưng hai lực có thể có giá song song và cách nhau một đoạn $d$, tạo thành ngẫu lực làm quay khung (Momen lực).' },
                { id: 'c', text: 'Lực từ tác dụng lên hai cạnh MQ và NP song song với trục quay luôn cùng chiều nhau để tạo thành một momen ngẫu lực làm quay khung.', isTrue: false, exp: 'Sai. Để tạo thành ngẫu lực làm quay khung, lực từ tác dụng lên hai cạnh đó phải ngược chiều nhau (ví dụ một lực kéo lên, một lực ấn xuống).' },
                { id: 'd', text: 'Trạng thái cân bằng bền của khung dây là khi mặt phẳng khung dây vuông góc với các đường sức từ.', isTrue: true, exp: 'Đúng. Khi mặt phẳng vuông góc với đường sức từ, giá của các lực từ tác dụng lên các cặp cạnh cùng nằm trên một mặt phẳng chứa khung dây, momen lực bằng 0, khung nằm ở trạng thái cân bằng bền.' }
            ]
        },
        {
            id: 'tu_14',
            context: '<strong>Câu 9. (Phân tích đồ thị Lực từ theo Dòng điện)</strong><br>Học sinh thực hiện thí nghiệm đo lực từ $F$ tác dụng lên một đoạn dây thẳng dài $L = 20$ cm đặt vuông góc với từ trường đều. Phần mềm vẽ được đồ thị biểu diễn sự phụ thuộc của lực từ $F$ vào cường độ dòng điện $I$ là một đường thẳng đi qua gốc tọa độ. Đồ thị đi qua điểm có tọa độ $I = 2,5$ A và $F = 0,15$ N.',
            statements: [
                { id: 'a', text: 'Đồ thị đi qua gốc tọa độ minh chứng cho việc lực từ tỉ lệ thuận với bình phương cường độ dòng điện.', isTrue: false, exp: 'Sai. Đường thẳng qua gốc tọa độ dạng $y = ax$ chứng tỏ $F$ tỉ lệ thuận với bậc 1 của $I$ ($F \\sim I$), không phải bình phương.' },
                { id: 'b', text: 'Hệ số góc (độ dốc) của đường thẳng đồ thị này có giá trị bằng độ lớn của cảm ứng từ $B$.', isTrue: false, exp: 'Sai. Hàm số $F = (BL\\sin 90^\\circ) \\cdot I \\Leftrightarrow F = (BL) \\cdot I$. Hệ số góc của đồ thị là $k = BL$, chứ không phải chỉ là $B$.' },
                { id: 'c', text: 'Từ dữ liệu của đồ thị, độ lớn cảm ứng từ $B$ được xác định là 0,3 T.', isTrue: true, exp: 'Đúng. Thay số vào phương trình: $0,15 = B \\cdot 0,2 \\cdot 2,5 \\Rightarrow 0,15 = 0,5 \\cdot B \\Rightarrow B = 0,3$ T.' },
                { id: 'd', text: 'Nếu thí nghiệm trên được thực hiện với một đoạn dây có chiều dài gấp đôi ($L\' = 40$ cm), đường thẳng đồ thị thu được sẽ dốc hơn (hệ số góc lớn hơn).', isTrue: true, exp: 'Đúng. Hệ số góc $k = BL$. Nếu $L$ tăng gấp đôi, hệ số góc $k$ sẽ tăng gấp đôi, đồ thị sẽ dốc cao hơn.' }
            ]
        },
        {
            id: 'tu_15',
            context: '<strong>Câu 10. (Từ trường Trái Đất và Thực tiễn kĩ thuật)</strong><br>Tại đường xích đạo, thành phần nằm ngang của từ trường Trái Đất có cảm ứng từ $B_0 \\approx 3 \\cdot 10^{-5}$ T và hướng từ Nam sang Bắc. Giả sử có một đường dây tải điện một chiều điện áp cao (HVDC) nằm ngang chạy song song với mặt đất theo hướng từ Tây sang Đông, mang dòng điện $I = 4000$ A. (Lấy $g \\approx 10$ m/s$^2$).',
            statements: [
                { id: 'a', text: 'Lực từ do từ trường Trái Đất tác dụng lên đoạn dây dẫn này có độ lớn bằng 0 N do cường độ từ trường quá nhỏ.', isTrue: false, exp: 'Sai. Mặc dù $B$ nhỏ, nhưng dòng tải $I$ rất lớn, đoạn dây đặt vuông góc với $\\vec{B}$ nên lực từ vẫn có một độ lớn nhất định, không bằng 0.' },
                { id: 'b', text: 'Theo quy tắc bàn tay trái, lực từ của Trái Đất sẽ tác dụng đẩy đường dây điện này lệch về phía Bắc.', isTrue: false, exp: 'Sai. Đặt tay trái: Từ trường $\\vec{B}$ hướng ra Bắc nên ngửa lòng bàn tay hướng về phía Nam để hứng các đường sức từ cắm vào. Dòng điện $I$ hướng từ Tây sang Đông $\\rightarrow$ chiều từ cổ tay đến ngón tay hướng sang Đông. Khi đó, ngón tay cái choãi ra $90^\\circ$ sẽ chỉ hướng thẳng đứng lên trời. (Không phải bị đẩy về phương Bắc).' },
                { id: 'c', text: 'Lực từ này sẽ có phương thẳng đứng, hướng từ dưới mặt đất lên trên trời.', isTrue: true, exp: 'Đúng. (Theo chứng minh quy tắc bàn tay trái ở câu b).' },
                { id: 'd', text: 'Lực từ tác dụng lên 1 mét chiều dài của sợi cáp này là cực kì nhỏ (0,12 N), không đủ sức để nâng nổi cáp điện nhưng vẫn là một thông số kĩ thuật cần biết.', isTrue: true, exp: 'Đúng. Lực trên 1 m là $F = B_0 \\cdot I \\cdot L \\cdot \\sin 90^\\circ = (3 \\cdot 10^{-5}) \\cdot 4000 \\cdot 1 = 0,12$ N/m. (Tương đương trọng lượng của 12 gam, quá bé so với trọng lượng cáp HVDC).' }
            ]
        },
        {
            id: 'tu_16',
            context: '<strong>Câu 1. (Định nghĩa và tính toán Từ thông)</strong><br>Một khung dây dẫn phẳng hình vuông cạnh $a = 10$ cm được đặt trong một từ trường đều có độ lớn cảm ứng từ $B = 0,5$ T. Từ trường xuyên qua khung dây tạo thành một góc $30^\\circ$ so với mặt phẳng của khung dây.',
            statements: [
                { id: 'a', text: 'Véc-tơ pháp tuyến $\\vec{n}$ của mặt phẳng khung dây hợp với véc-tơ cảm ứng từ $\\vec{B}$ một góc $\\alpha = 30^\\circ$.', isTrue: false, exp: 'Sai. Góc giữa $\\vec{B}$ và mặt phẳng khung là $30^\\circ$. Véc-tơ pháp tuyến $\\vec{n}$ luôn vuông góc với mặt phẳng khung. Do đó, góc $\\alpha$ (giữa $\\vec{B}$ và $\\vec{n}$) phải là $90^\\circ - 30^\\circ = 60^\\circ$.' },
                { id: 'b', text: 'Giá trị từ thông gửi qua khung dây dẫn này là $2,5 \\cdot 10^{-3}$ Wb.', isTrue: true, exp: 'Đúng. Áp dụng công thức $\\Phi = BS\\cos\\alpha$. Diện tích $S = a^2 = (0,1)^2 = 0,01$ m$^2$. Ta có $\\Phi = 0,5 \\cdot 0,01 \\cdot \\cos 60^\\circ = 0,005 \\cdot 0,5 = 0,0025$ Wb $= 2,5 \\cdot 10^{-3}$ Wb.' },
                { id: 'c', text: 'Nếu giữ nguyên độ lớn $B$ và diện tích $S$, nhưng xoay khung dây sao cho mặt phẳng của nó vuông góc với các đường sức từ thì từ thông qua khung dây sẽ đạt giá trị cực đại.', isTrue: true, exp: 'Đúng. Khi mặt phẳng vuông góc với $\\vec{B}$, góc $\\alpha = 0^\\circ \\Rightarrow \\cos 0^\\circ = 1$. Từ thông đạt cực đại $\\Phi_{\\text{max}} = BS$.' },
                { id: 'd', text: 'Nếu từ thông qua mặt phẳng khung dây là đại lượng vô hướng có thể mang giá trị âm, điều đó chứng tỏ từ thông là một đại lượng không có ý nghĩa vật lí thực tế.', isTrue: false, exp: 'Sai. Từ thông là đại lượng vô hướng và dấu (âm hay dương) hoàn toàn có ý nghĩa vật lí. Nó phụ thuộc vào việc ta chọn chiều của véc-tơ pháp tuyến $\\vec{n}$. Dấu của từ thông giúp xác định chiều của dòng điện cảm ứng theo định luật Lenz.' }
            ]
        },
        {
            id: 'tu_17',
            context: '<strong>Câu 2. (Thí nghiệm Faraday cơ bản)</strong><br>Mắc hai đầu một cuộn dây dẫn hình trụ vào một điện kế nhạy (điện kế có vạch số 0 ở chính giữa). Dùng một nam châm vĩnh cửu hình thẳng thực hiện các thao tác thí nghiệm sau.',
            statements: [
                { id: 'a', text: 'Khi đưa cực Bắc (N) của nam châm tiến nhanh vào trong lòng cuộn dây, kim điện kế sẽ lệch về một phía, chứng tỏ có dòng điện chạy qua cuộn dây.', isTrue: true, exp: 'Đúng. Sự chuyển động tương đối làm từ thông qua cuộn dây biến thiên, sinh ra dòng điện cảm ứng.' },
                { id: 'b', text: 'Khi để nam châm đứng yên bên trong lòng cuộn dây một khoảng thời gian dài, kim điện kế vẫn sẽ tiếp tục duy trì độ lệch vì từ trường của nam châm rất mạnh.', isTrue: false, exp: 'Sai. Khi nam châm đứng yên, từ thông qua cuộn dây không biến thiên ($\\Delta\\Phi = 0$), suất điện động bằng 0, kim điện kế trở về vạch 0. (Hiện tượng cảm ứng chỉ tồn tại trong thời gian từ thông biến thiên).' },
                { id: 'c', text: 'Khi kéo cực Bắc (N) của nam châm ra khỏi cuộn dây, kim điện kế sẽ lệch về phía ngược lại so với lúc đưa nam châm vào.', isTrue: true, exp: 'Đúng. Lúc đưa vào (từ thông tăng) và kéo ra (từ thông giảm) là hai quá trình ngược nhau. Theo định luật Lenz, dòng điện cảm ứng phải đổi chiều để chống lại sự biến thiên, nên kim điện kế lệch ngược lại.' },
                { id: 'd', text: 'Hiện tượng cảm ứng điện từ trong thí nghiệm này chỉ xảy ra khi nam châm chuyển động, còn nếu giữ nam châm đứng yên và di chuyển cuộn dây thì sẽ không có hiện tượng gì xảy ra.', isTrue: false, exp: 'Sai. Hiện tượng cảm ứng xảy ra do sự biến thiên từ thông, không phân biệt cái nào chuyển động. Việc di chuyển cuộn dây lại gần nam châm đứng yên vẫn làm từ thông qua cuộn dây biến thiên, và dòng điện cảm ứng vẫn xuất hiện.' }
            ]
        },
        {
            id: 'tu_18',
            context: '<strong>Câu 3. (Vận dụng Định luật Faraday)</strong><br>Một vòng dây dẫn kín bằng nhôm có diện tích $S = 0,04$ m$^2$, điện trở $R = 0,2\\text{ }\\Omega$ được đặt trong một từ trường đều. Véc-tơ cảm ứng từ $\\vec{B}$ vuông góc với mặt phẳng vòng dây. Cho cảm ứng từ $B$ giảm đều từ 0,5 T xuống 0,1 T trong khoảng thời gian $\\Delta t = 0,05$ s.',
            statements: [
                { id: 'a', text: 'Độ biến thiên từ thông $\\Delta\\Phi$ qua vòng dây trong khoảng thời gian trên có độ lớn là 0,016 Wb.', isTrue: true, exp: 'Đúng. $\\vec{B} \\perp$ mặt phẳng vòng dây $\\Rightarrow \\alpha = 0^\\circ \\Rightarrow \\cos 0^\\circ = 1$. Độ biến thiên từ thông: $|\\Delta\\Phi| = |(B_2 - B_1) \\cdot S| = |(0,1 - 0,5) \\cdot 0,04| = |-0,4 \\cdot 0,04| = 0,016$ Wb.' },
                { id: 'b', text: 'Độ lớn suất điện động cảm ứng sinh ra trong vòng dây là 0,32 V.', isTrue: true, exp: 'Đúng. Độ lớn suất điện động cảm ứng (Định luật Faraday): $|e_c| = \\frac{|\\Delta\\Phi|}{\\Delta t} = \\frac{0,016}{0,05} = 0,32$ V.' },
                { id: 'c', text: 'Cường độ dòng điện cảm ứng chạy trong vòng dây là 1,6 A.', isTrue: true, exp: 'Đúng. Cường độ dòng điện: $I_c = \\frac{|e_c|}{R} = \\frac{0,32}{0,2} = 1,6$ A.' },
                { id: 'd', text: 'Theo biểu thức $e_c = - \\frac{\\Delta\\Phi}{\\Delta t}$, dấu trừ chỉ ra rằng suất điện động cảm ứng luôn có giá trị âm.', isTrue: false, exp: 'Sai. Dấu trừ trong định luật Faraday là biểu hiện toán học của định luật Lenz (chống lại nguyên nhân sinh ra nó). Giá trị của $e_c$ âm hay dương phụ thuộc vào việc từ thông đang tăng ($\\Delta\\Phi > 0 \\Rightarrow e_c < 0$) hay giảm ($\\Delta\\Phi < 0 \\Rightarrow e_c > 0$).' }
            ]
        },
        {
            id: 'tu_19',
            context: '<strong>Câu 4. (Vận dụng Định luật Lenz - Khung dây trượt)</strong><br>Một thanh kim loại MN dài $L$ trượt không ma sát với vận tốc không đổi $\\vec{v}$ dọc theo hai thanh ray dẫn điện song song (tạo thành một mạch kín hình chữ U). Hệ thống được đặt trong một từ trường đều $\\vec{B}$ có hướng thẳng đứng từ dưới lên trên.',
            statements: [
                { id: 'a', text: 'Sự trượt của thanh MN làm diện tích mạch kín tăng lên, dẫn đến từ thông qua mạch biến thiên và sinh ra dòng điện cảm ứng.', isTrue: true, exp: 'Đúng. Diện tích hình chữ U (do thanh MN quét qua) tăng liên tục làm từ thông $\\Phi = BS$ tăng theo $\\rightarrow$ xuất hiện cảm ứng điện từ.' },
                { id: 'b', text: 'Theo Định luật Lenz, chiều của dòng điện cảm ứng trong thanh MN phải sinh ra một lực từ đẩy thanh MN tiếp tục trượt nhanh hơn.', isTrue: false, exp: 'Sai. Theo Định luật Lenz, dòng điện cảm ứng có tác dụng chống lại nguyên nhân sinh ra nó. Nguyên nhân là thanh MN trượt tới. Do đó, lực từ tác dụng lên MN phải là lực cản (ngược chiều $\\vec{v}$), kéo chậm thanh MN lại chứ không phải thúc đẩy nó trượt nhanh hơn.' },
                { id: 'c', text: 'Từ trường do dòng điện cảm ứng sinh ra sẽ có chiều ngược lại (hướng từ trên xuống dưới) so với từ trường ban đầu $\\vec{B}$.', isTrue: true, exp: 'Đúng. Vì từ thông đang tăng (do diện tích tăng), từ trường cảm ứng $\\vec{B_c}$ phải ngược chiều với từ trường gốc $\\vec{B}$ để triệt tiêu bớt sự tăng đó. $\\vec{B}$ gốc hướng lên, $\\vec{B_c}$ hướng xuống.' },
                { id: 'd', text: 'Công của lực kéo bên ngoài (để duy trì vận tốc $\\vec{v}$) chính là nguồn gốc năng lượng tạo ra điện năng của dòng điện cảm ứng trong mạch.', isTrue: true, exp: 'Đúng. Để thanh chuyển động đều (không bị lực từ cản lại làm dừng hẳn), người ta phải tác dụng một lực kéo cơ học. Công của lực cơ học này chính là năng lượng chuyển hóa thành điện năng (dòng điện cảm ứng tỏa nhiệt trên điện trở của mạch). Đây là nguyên lí chuyển hóa năng lượng cơ bản.' }
            ]
        },
        {
            id: 'tu_20',
            context: '<strong>Câu 5. (Thí nghiệm thả nam châm qua vòng dây - Ứng dụng Định luật Lenz)</strong><br>Cố định một vòng dây đồng nằm ngang trên giá đỡ. Thả một thanh nam châm thẳng cho rơi tự do theo phương thẳng đứng xuyên qua tâm của vòng dây (cực Bắc N hướng xuống dưới). Bỏ qua sức cản không khí.',
            statements: [
                { id: 'a', text: 'Trong giai đoạn nam châm đang rơi từ trên cao tiến lại gần mặt vòng dây, dòng điện cảm ứng trong vòng dây có chiều sao cho mặt trên của vòng dây trở thành cực Nam (S).', isTrue: false, exp: 'Sai. Nam châm đưa cực Bắc (N) tiến lại gần làm từ thông tăng. Theo Định luật Lenz, vòng dây phải sinh ra cực cùng tên để đẩy nam châm lại. Mặt trên của vòng dây phải là cực Bắc (N).' },
                { id: 'b', text: 'Gia tốc rơi của thanh nam châm khi đang tiến lại gần vòng dây nhỏ hơn gia tốc rơi tự do $g$.', isTrue: true, exp: 'Đúng. Lực từ do vòng dây sinh ra (lực đẩy lên trên) ngược chiều với trọng lực, làm giảm gia tốc rơi của nam châm so với rơi tự do.' },
                { id: 'c', text: 'Trong giai đoạn nam châm vừa lọt qua khỏi vòng dây và tiếp tục rơi xuống dưới, dòng điện cảm ứng trong vòng dây sẽ đổi chiều so với giai đoạn trước.', isTrue: true, exp: 'Đúng. Khi đi ra xa, từ thông qua vòng dây đang giảm. Vòng dây phải sinh ra cực khác tên (hút lại) để chống lại sự rời đi của nam châm (mặt dưới vòng dây trở thành cực Bắc N). Điều này đòi hỏi dòng điện cảm ứng phải đổi chiều.' },
                { id: 'd', text: 'Khi nam châm đã đi xa khỏi vòng dây, từ thông qua vòng dây bằng không, dòng điện cảm ứng lập tức biến mất.', isTrue: true, exp: 'Đúng. Khi ở đủ xa, từ trường của nam châm xuyên qua vòng dây không đáng kể, từ thông $\\approx 0$ và không còn biến thiên, do đó suất điện động và dòng điện cảm ứng bằng 0.' }
            ]
        },
        {
            id: 'tu_21',
            context: '<strong>Câu 6. (Dòng điện Foucault trong lõi thép)</strong><br>Một khối kim loại hình trụ đặc được thả quay tự do bên trong một vùng từ trường biến thiên cường độ mạnh.',
            statements: [
                { id: 'a', text: 'Hiện tượng cảm ứng điện từ xảy ra ngay trong khối lượng của khối kim loại, sinh ra các dòng điện kín gọi là dòng điện Foucault.', isTrue: true, exp: 'Đúng. Đây là định nghĩa và bản chất của dòng điện Foucault.' },
                { id: 'b', text: 'Dòng điện Foucault chỉ mang tính chất gây hại do chúng làm tiêu hao năng lượng thành nhiệt năng theo hiệu ứng Joule-Lenz.', isTrue: false, exp: 'Sai. Dòng Foucault gây hại trong lõi máy biến áp (làm nóng máy), nhưng nó lại mang tính có ích trong nhiều ứng dụng kĩ thuật như: bếp từ, lò nướng kim loại, phanh điện từ, công tơ điện.' },
                { id: 'c', text: 'Để giảm tác hại của dòng Foucault trong các máy biến áp hoặc động cơ, người ta đúc lõi sắt thành một khối đặc và mạ lớp cách điện bên ngoài.', isTrue: false, exp: 'Sai. Đúc khối đặc sẽ làm dòng Foucault chạy thành những vòng lớn (điện trở nhỏ $\\rightarrow$ cường độ lớn $\\rightarrow$ cực nóng). Biện pháp đúng là ghép cách điện nhiều lá thép mỏng lại với nhau để cắt đứt các mạch vòng Foucault, giảm cường độ dòng Foucault đi đáng kể.' },
                { id: 'd', text: 'Dòng điện Foucault có tác dụng tạo ra một momen lực từ (lực hãm từ) chống lại sự quay của khối kim loại, làm nó dừng lại nhanh chóng.', isTrue: true, exp: 'Đúng. Theo hệ quả của định luật Lenz, dòng Foucault sinh ra luôn có tác dụng chống lại nguyên nhân sinh ra nó (chống lại chuyển động quay $\\rightarrow$ lực cản từ).' }
            ]
        },
        {
            id: 'tu_22',
            context: '<strong>Câu 7. (Ứng dụng cảm ứng điện từ: Bếp từ)</strong><br>Bếp từ hiện đại sử dụng dòng điện xoay chiều tần số cao để đun nấu thức ăn. Một học sinh quan sát bếp từ nhà mình và đưa ra các nhận xét.',
            statements: [
                { id: 'a', text: 'Bếp từ hoạt động bằng cách làm nóng trực tiếp mặt kính ceramic, sau đó mặt kính mới truyền nhiệt lên đáy nồi.', isTrue: false, exp: 'Sai. Mặt kính của bếp cách điện và không có tính từ nên không sinh ra dòng Foucault, nó không tự nóng lên. Nhiệt sinh ra từ đáy nồi kim loại, sau đó truyền ngược một phần làm ấm mặt kính.' },
                { id: 'b', text: 'Bên dưới mặt kính của bếp từ có một mâm từ (cuộn dây phẳng) được cấp dòng điện xoay chiều để tạo ra một từ trường biến thiên tần số cao.', isTrue: true, exp: 'Đúng. Dòng điện xoay chiều biến thiên $\\rightarrow$ sinh ra từ trường biến thiên xuyên qua mặt kính lên đáy nồi.' },
                { id: 'c', text: 'Nếu người dùng đặt một chiếc nồi đất nung (chất liệu phi kim) lên bếp, bếp từ vẫn có thể đun sôi nước bên trong nồi.', isTrue: false, exp: 'Sai. Nồi đất nung (gốm, sứ) là chất cách điện. Dù từ trường biến thiên xuyên qua, nhưng do điện trở quá lớn nên không thể xuất hiện các dòng điện Foucault cảm ứng. Bếp không thể hoạt động (thường sẽ báo lỗi E0).' },
                { id: 'd', text: 'Để bếp từ hoạt động đạt hiệu suất cao, nồi được dùng phải làm bằng vật liệu dẫn điện tốt và có tính chất dẫn từ (sắt từ).', isTrue: true, exp: 'Đúng. Nồi phải dẫn điện (thường là hợp kim thép/inox nhiễm từ) để cho dòng Foucault chạy qua. Tính sắt từ giúp tập trung các đường sức từ vào đáy nồi, tránh phát phát tán ra xung quanh, tăng cường hiệu ứng Foucault.' }
            ]
        },
        {
            id: 'tu_23',
            context: '<strong>Câu 8. (Ứng dụng cảm ứng điện từ: Phanh điện từ)</strong><br>Phanh điện từ (hay còn gọi là Retarder) được trang bị phổ biến trên các xe khách và xe tải siêu trường siêu trọng để hỗ trợ phanh an toàn khi đổ đèo. Phanh gồm một đĩa kim loại gắn chặt trên trục các-đăng của xe, quay lọt giữa các cuộn nam châm điện cố định trên khung xe.',
            statements: [
                { id: 'a', text: 'Khi tài xế kích hoạt phanh, nam châm điện tạo ra từ trường cực mạnh làm cho đĩa kim loại bị hút chặt vào má phanh, tạo ra ma sát lớn để dừng xe.', isTrue: false, exp: 'Sai. Phanh điện từ hoàn toàn không có tiếp xúc cơ học (không có ma sát vật lí giữa má phanh và đĩa). Lực hãm là lực từ do dòng Foucault tương tác với nam châm điện sinh ra.' },
                { id: 'b', text: 'Phanh điện từ hoạt động dựa trên nguyên tắc dòng điện Foucault sinh ra bên trong đĩa kim loại đang quay trong từ trường.', isTrue: true, exp: 'Đúng. Đây là ứng dụng kinh điển của hiện tượng cảm ứng điện từ và dòng điện Foucault.' },
                { id: 'c', text: 'Toàn bộ động năng của xe khi đổ đèo được phanh điện từ hấp thụ và chuyển hóa thành nhiệt năng làm nóng đỏ đĩa phanh.', isTrue: true, exp: 'Đúng. Công cản của lực từ được chuyển hóa thành điện năng (dòng Foucault), rồi chuyển thành nhiệt năng ($I^2R$) trên đĩa kim loại. Các đĩa phanh từ luôn có thiết kế quạt tản gió lớn vì nó rất nóng.' },
                { id: 'd', text: 'Một nhược điểm vật lí của phanh điện từ là khi tốc độ xe càng chậm lại, lực hãm từ do nó sinh ra càng mạnh lên, dễ gây khóa cứng bánh xe.', isTrue: false, exp: 'Sai. Dòng Foucault tỉ lệ thuận với tốc độ biến thiên từ thông. Tốc độ quay của xe càng chậm $\\rightarrow$ biến thiên từ thông càng chậm $\\rightarrow$ dòng Foucault càng yếu $\\rightarrow$ lực hãm càng nhỏ. Phanh từ không bao giờ có thể làm xe dừng hẳn, nó chỉ có tác dụng hãm tốc độ cao.' }
            ]
        },
        {
            id: 'tu_24',
            context: '<strong>Câu 9. (Máy dò kim loại - Nguyên lí dòng Foucault)</strong><br>Nhân viên an ninh tại sân bay sử dụng một máy dò kim loại cầm tay quét dọc cơ thể hành khách.',
            statements: [
                { id: 'a', text: 'Cuộn dây phát (Transmitter) trong máy dò phát ra sóng âm thanh tần số cao để dội lại khi gặp kim loại.', isTrue: false, exp: 'Sai. Máy dò kim loại hoạt động dựa trên sự tương tác của từ trường (sóng điện từ tần số vô tuyến), không phải sóng âm thanh (như siêu âm hay sonar).' },
                { id: 'b', text: 'Sóng điện từ dạng xung xoay chiều từ cuộn dây phát xuyên qua quần áo, tạo ra từ trường biến thiên trên bề mặt đồ vật kim loại (như chìa khóa, đồng xu).', isTrue: true, exp: 'Đúng. Từ trường biến thiên là điều kiện tiên quyết để tạo cảm ứng điện từ.' },
                { id: 'c', text: 'Từ trường biến thiên này sinh ra dòng điện Foucault trên bề mặt miếng kim loại. Chính các dòng Foucault này lại sinh ra một từ trường thứ cấp (từ trường cảm ứng) bức xạ ngược trở lại.', isTrue: true, exp: 'Đúng. Đây là chuỗi logic cốt lõi: Điện biến thiên $\\rightarrow$ Từ biến thiên $\\rightarrow$ Dòng cảm ứng Foucault $\\rightarrow$ Từ trường cảm ứng.' },
                { id: 'd', text: 'Cuộn dây thu (Receiver) trên máy dò bắt được từ trường thứ cấp này, chuyển thành tín hiệu điện và kích hoạt còi báo động.', isTrue: true, exp: 'Đúng. Sự xuất hiện của từ trường thứ cấp là dấu hiệu khẳng định có vật liệu dẫn điện (kim loại) cản đường sóng phát ra ban đầu.' }
            ]
        },
        {
            id: 'tu_25',
            context: '<strong>Câu 10. (Cảm ứng điện từ sinh ra Điện trường xoáy)</strong><br>James Clerk Maxwell đã mở rộng định luật Faraday, chỉ ra bản chất sâu xa của hiện tượng cảm ứng điện từ.',
            statements: [
                { id: 'a', text: 'Mọi sự biến thiên của từ trường theo thời gian đều sinh ra một điện trường. Điện trường này được gọi là điện trường tĩnh.', isTrue: false, exp: 'Sai. Từ trường biến thiên sinh ra điện trường xoáy, không phải điện trường tĩnh (do các điện tích đứng yên sinh ra).' },
                { id: 'b', text: 'Điện trường xoáy là một trường véc-tơ mà đường sức của nó là những đường cong khép kín.', isTrue: true, exp: 'Đúng. Khác với điện trường tĩnh có đường sức hở, điện trường xoáy có đường sức là các đường cong khép kín không có điểm khởi đầu hay kết thúc.' },
                { id: 'c', text: 'Dòng điện cảm ứng xuất hiện trong một vòng dây kim loại kín đặt trong từ trường biến thiên thực chất là do điện trường xoáy tác dụng lực điện lên các electron tự do trong dây.', isTrue: true, exp: 'Đúng. Điện trường xoáy là bản chất của suất điện động cảm ứng. Lực điện trường xoáy đẩy electron dịch chuyển thành dòng điện. Vòng dây chỉ là môi trường vật chất để ta "nhìn thấy" dòng điện đó.' },
                { id: 'd', text: 'Nếu không có vòng dây kim loại, từ trường biến thiên trong chân không sẽ không thể sinh ra điện trường xoáy.', isTrue: false, exp: 'Sai. Theo Maxwell, sự tồn tại của điện trường xoáy là tuyệt đối. Dù có hay không có vòng dây dẫn, hễ có từ trường biến thiên là ở đó xuất hiện điện trường xoáy. (Đây là cơ sở sinh ra sóng điện từ trong chân không).' }
            ]
        },
        {
            id: 'tu_26',
            context: '<strong>Câu 1. (Mô hình và bản chất của sóng điện từ)</strong><br>Theo lí thuyết của Maxwell về điện từ trường, khi một điện tích dao động có gia tốc sẽ bức xạ ra không gian một sóng điện từ.',
            statements: [
                { id: 'a', text: 'Sóng điện từ là sự lan truyền của điện từ trường biến thiên trong không gian theo thời gian.', isTrue: true, exp: 'Đúng. Đây là định nghĩa nền tảng về bản chất của sóng điện từ.' },
                { id: 'b', text: 'Sóng điện từ là sóng dọc do nó có khả năng truyền được trong cả môi trường vật chất và chân không.', isTrue: false, exp: 'Sai. Sóng điện từ luôn luôn là sóng ngang vì phương dao động của các véc-tơ $\\vec{E}$ và $\\vec{B}$ luôn vuông góc với phương truyền sóng $\\vec{v}$.' },
                { id: 'c', text: 'Tại mọi điểm trên phương truyền sóng, véc-tơ cường độ điện trường $\\vec{E}$ và véc-tơ cảm ứng từ $\\vec{B}$ luôn dao động vuông pha với nhau.', isTrue: false, exp: 'Sai. Tại một điểm bất kì trên phương truyền, điện trường và từ trường luôn dao động cùng pha (cùng đạt cực đại hoặc cùng triệt tiêu tại một thời điểm).' },
                { id: 'd', text: 'Tại một thời điểm, véc-tơ cường độ điện trường $\\vec{E}$, véc-tơ cảm ứng từ $\\vec{B}$ và véc-tơ vận tốc truyền sóng $\\vec{v}$ luôn tạo thành một tam diện thuận.', isTrue: true, exp: 'Đúng. Ba véc-tơ $\\vec{E}, \\vec{B}, \\vec{v}$ vuông góc với nhau từng đôi một và tuân theo quy tắc đinh ốc (hoặc quy tắc bàn tay phải), tạo thành tam diện thuận.' }
            ]
        },
        {
            id: 'tu_27',
            context: '<strong>Câu 2. (Sự truyền sóng điện từ trong các môi trường)</strong><br>Một chùm sóng điện từ (ví dụ như ánh sáng nhìn thấy) truyền từ không khí (chiết suất $n \\approx 1$) vào trong môi trường nước (chiết suất $n = 4/3$).',
            statements: [
                { id: 'a', text: 'Sóng điện từ mang theo năng lượng trong quá trình lan truyền.', isTrue: true, exp: 'Đúng. Quá trình truyền sóng là quá trình truyền năng lượng (năng lượng điện từ trường).' },
                { id: 'b', text: 'Tốc độ truyền của sóng điện từ trong mọi môi trường vật chất đều bằng với tốc độ của nó trong chân không ($c = 3 \\cdot 10^8$ m/s).', isTrue: false, exp: 'Sai. Tốc độ truyền sóng điện từ trong môi trường vật chất là $v = \\frac{c}{n}$. Vì chiết suất $n > 1$ nên tốc độ trong môi trường vật chất luôn nhỏ hơn trong chân không.' },
                { id: 'c', text: 'Khi truyền từ không khí vào nước, tần số của sóng điện từ không thay đổi nhưng bước sóng của nó bị giảm đi.', isTrue: true, exp: 'Đúng. Tần số $f$ là đặc trưng của nguồn phát nên không đổi. Vận tốc $v$ giảm đi $n$ lần, do $\\lambda = \\frac{v}{f}$ nên bước sóng $\\lambda$ cũng giảm đi $n$ lần.' },
                { id: 'd', text: 'Nếu một chùm sóng điện từ đi ngang qua một điện trường tĩnh cực kì mạnh, nó sẽ bị bẻ cong lệch khỏi quỹ đạo ban đầu.', isTrue: false, exp: 'Sai. Sóng điện từ (bao gồm các photon) không mang điện tích, do đó nó không chịu tác dụng của lực điện (hoặc lực từ) ngoài. Sóng điện từ truyền thẳng qua điện/từ trường tĩnh mà không bị lệch.' }
            ]
        },
        {
            id: 'tu_28',
            context: '<strong>Câu 3. (Tổng quan về Thang sóng điện từ)</strong><br>Thang sóng điện từ là sự sắp xếp các dải sóng điện từ theo thứ tự bước sóng (hoặc tần số) liên tục từ vô cùng ngắn đến vô cùng dài.',
            statements: [
                { id: 'a', text: 'Mọi bức xạ trong thang sóng điện từ (từ sóng vô tuyến đến tia gamma) đều có chung bản chất là sóng điện từ.', isTrue: true, exp: 'Đúng. Tất cả đều lan truyền điện từ trường trong không gian và tuân theo các hệ phương trình Maxwell.' },
                { id: 'b', text: 'Các dải sóng trong thang sóng điện từ có ranh giới phân định vật lí hoàn toàn rạch ròi và không bao giờ chồng lấn lên nhau.', isTrue: false, exp: 'Sai. Thực tế không có ranh giới rõ rệt. Các vùng thường chồng lấn lên nhau ở phần rìa (ví dụ: ranh giới giữa tia X và tia Gamma thường được phân biệt dựa trên nguồn gốc phát sinh chứ không chỉ dựa vào bước sóng).' },
                { id: 'c', text: 'Ánh sáng nhìn thấy (khả kiến) chỉ chiếm một vùng rất hẹp trong toàn bộ phổ của thang sóng điện từ.', isTrue: true, exp: 'Đúng. Vùng khả kiến chỉ trải dài từ khoảng 380 nm đến 760 nm, rất bé so với cả dải vô tuyến hay dải tia X.' },
                { id: 'd', text: 'Sóng điện từ có tần số càng cao thì năng lượng mang theo (năng lượng photon) càng lớn và tính đâm xuyên càng mạnh.', isTrue: true, exp: 'Đúng. Năng lượng $E = hf$, tần số $f$ càng lớn thì năng lượng càng lớn $\\rightarrow$ tính đâm xuyên (tính hạt) càng thể hiện rõ (như tia X, tia Gamma).' }
            ]
        },
        {
            id: 'tu_29',
            context: '<strong>Câu 4. (Sóng vô tuyến và Vi ba - Đặc điểm và Ứng dụng)</strong><br>Sóng vô tuyến và vi ba (Microwave) nằm ở dải tần số thấp nhất của thang sóng điện từ.',
            statements: [
                { id: 'a', text: 'Sóng vô tuyến có bước sóng lớn nhất và do đó mang năng lượng nhỏ nhất trong thang sóng điện từ.', isTrue: true, exp: 'Đúng. Bước sóng vô tuyến trải từ vài mm đến hàng chục km. Vì $\\lambda$ lớn nhất nên $f$ nhỏ nhất $\\rightarrow$ năng lượng nhỏ nhất.' },
                { id: 'b', text: 'Sóng vi ba có bản chất là sóng cơ học siêu âm tần số rất cao, được ứng dụng để làm xát động các phân tử nước trong lò vi sóng.', isTrue: false, exp: 'Sai. Sóng vi ba là sóng điện từ, không phải sóng cơ (sóng âm). Lò vi sóng dùng sóng điện từ (thường ở tần số 2,45 GHz) để làm quay cực các phân tử nước, sinh ra nhiệt ma sát.' },
                { id: 'c', text: 'Sóng vô tuyến tuân theo đầy đủ các hiện tượng của quang học sóng như: phản xạ, khúc xạ, giao thoa và nhiễu xạ.', isTrue: true, exp: 'Đúng. Sóng vô tuyến có bản chất như ánh sáng nên mang đầy đủ các tính chất của sóng.' },
                { id: 'd', text: 'Để tín hiệu từ Trạm vũ trụ quốc tế (ISS) truyền được xuyên qua tầng điện li xuống mặt đất, người ta bắt buộc phải sử dụng các dải sóng cực ngắn (hoặc vi ba).', isTrue: true, exp: 'Đúng. Tầng điện li phản xạ các dải sóng dài, sóng trung và sóng ngắn. Chỉ có sóng cực ngắn (bước sóng từ 1 - 10 m trở xuống) mới có đủ năng lượng đâm xuyên qua tầng điện li để thông tin liên lạc vũ trụ.' }
            ]
        },
        {
            id: 'tu_30',
            context: '<strong>Câu 5. (Tia hồng ngoại và Tia tử ngoại - Đặc tính phát xạ)</strong><br>Hai bức xạ không nhìn thấy nằm kề sát hai đầu của vùng ánh sáng khả kiến là tia hồng ngoại (IR) và tia tử ngoại (UV).',
            statements: [
                { id: 'a', text: 'Trong tự nhiên, chỉ những vật bị nung nóng đến nhiệt độ rất cao (trên 500°C) mới bắt đầu phát ra tia hồng ngoại.', isTrue: false, exp: 'Sai. Mọi vật có nhiệt độ lớn hơn độ không tuyệt đối (0 K, tức -273°C) đều bức xạ tia hồng ngoại. Cơ thể người (37°C) phát tia hồng ngoại rất mạnh.' },
                { id: 'b', text: 'Cả tia hồng ngoại và tia tử ngoại đều tuân theo định luật truyền thẳng, phản xạ và khúc xạ tương tự như ánh sáng thông thường.', isTrue: true, exp: 'Đúng. Chúng đều là sóng điện từ nên có chung các tính chất quang học cơ bản.' },
                { id: 'c', text: 'Tia tử ngoại có bước sóng lớn hơn bước sóng của ánh sáng màu tím.', isTrue: false, exp: 'Sai. "Tử ngoại" nghĩa là ngoài vùng màu tím. Tần số của nó cao hơn ánh sáng tím, do đó bước sóng của tia tử ngoại phải nhỏ hơn bước sóng của ánh sáng tím ($< 380$ nm).' },
                { id: 'd', text: 'Mặt Trời là một nguồn phát bức xạ khổng lồ, phát ra cả tia hồng ngoại, ánh sáng nhìn thấy và tia tử ngoại.', isTrue: true, exp: 'Đúng. Bức xạ Mặt Trời là bức xạ nhiệt dải rộng, chứa từ bức xạ hồng ngoại (gây nóng), khả kiến (chiếu sáng) đến tử ngoại (làm đen da).' }
            ]
        },
        {
            id: 'tu_31',
            context: '<strong>Câu 6. (Tia hồng ngoại và Tia tử ngoại - Ứng dụng thực tiễn)</strong><br>Các ứng dụng công nghệ ngày nay tận dụng rất tốt các đặc trưng của bức xạ IR và UV.',
            statements: [
                { id: 'a', text: 'Tác dụng nổi bật nhất của tia hồng ngoại là tác dụng nhiệt, do đó nó được dùng trong các lò sưởi và tủ sấy công nghiệp.', isTrue: true, exp: 'Đúng. Tia hồng ngoại làm vật hấp thụ nó nóng lên rất nhanh.' },
                { id: 'b', text: 'Bộ điều khiển từ xa (Remote) của tivi và máy lạnh trong gia đình hoạt động dựa trên việc phát và thu tia tử ngoại.', isTrue: false, exp: 'Sai. Remote gia dụng sử dụng tia hồng ngoại (IR), không dùng tia tử ngoại vì tia tử ngoại mang năng lượng cao, có hại cho mắt và da người.' },
                { id: 'c', text: 'Tia tử ngoại (đặc biệt là dải UV-C) có khả năng phá hủy DNA của tế bào, nên được ứng dụng rộng rãi trong các đèn diệt khuẩn ở phòng mổ và máy lọc nước.', isTrue: true, exp: 'Đúng. Ứng dụng diệt khuẩn là tác dụng sinh lí đặc trưng của tia tử ngoại cường độ cao.' },
                { id: 'd', text: 'Tia hồng ngoại có thể gây ra hiện tượng quang điện ngoài ở nhiều kim loại tốt hơn so với tia tử ngoại.', isTrue: false, exp: 'Sai. Hiện tượng quang điện đòi hỏi năng lượng photon lớn để bứt electron. Tia tử ngoại có tần số lớn $\\rightarrow$ năng lượng lớn nên gây ra hiện tượng quang điện dễ dàng. Tia hồng ngoại mang năng lượng rất thấp, không thể gây ra quang điện ngoài ở kim loại.' }
            ]
        },
        {
            id: 'tu_32',
            context: '<strong>Câu 7. (Tia Rơnghen / Tia X - Bản chất và Nguồn phát)</strong><br>Tia X được Wilhelm Röntgen phát hiện vào năm 1895, tạo ra bước ngoặt lớn cho y học và tinh thể học.',
            statements: [
                { id: 'a', text: 'Trong ống tia X (ống Coolidge), tia X được tạo ra bằng cách nung nóng cực catốt đến nhiệt độ hàng vạn độ C để bức xạ thẳng ra tia X.', isTrue: false, exp: 'Sai. Nung nóng catốt chỉ để bứt electron ra (phát xạ nhiệt electron). Chùm electron này phải được tăng tốc bằng điện áp cao (hàng chục kV) rồi đập vào anốt mới phát ra tia X. (Bức xạ hãm).' },
                { id: 'b', text: 'Cơ chế phát sinh tia X là do chùm electron có động năng rất lớn đập vào một mục tiêu (anốt) bằng kim loại có nguyên tử lượng lớn, làm phát sinh bức xạ điện từ.', isTrue: true, exp: 'Đúng. Sự hãm đột ngột các electron tốc độ cao khi đập vào lưới tinh thể kim loại nặng sẽ giải phóng năng lượng dưới dạng phôtôn tia X.' },
                { id: 'c', text: 'Tia X có tần số thấp hơn tia tử ngoại nhưng cao hơn ánh sáng nhìn thấy.', isTrue: false, exp: 'Sai. Trong thang sóng điện từ, tia X có năng lượng cao hơn tia tử ngoại, do đó tần số của tia X phải cao hơn tia tử ngoại (bước sóng ngắn hơn).' },
                { id: 'd', text: 'Tia X có tính đâm xuyên rất mạnh, truyền dễ dàng qua vải, gỗ và các mô mềm nhưng bị cản lại đáng kể bởi chì và xương sống.', isTrue: true, exp: 'Đúng. Khả năng đâm xuyên phụ thuộc vào bước sóng và mật độ khối lượng nguyên tử của vật cản. Chì (hạt nhân nặng) và xương (chứa canxi) hấp thụ tia X rất mạnh, trong khi phần mềm (C, H, O) thì cho tia X xuyên qua.' }
            ]
        },
        {
            id: 'tu_33',
            context: '<strong>Câu 8. (Tia X - Đặc tính và Ứng dụng)</strong><br>Ngoài khả năng đâm xuyên, tia X còn có nhiều đặc tính vật lí đáng chú ý khác.',
            statements: [
                { id: 'a', text: 'Tia X có khả năng làm đen kính ảnh, đây là cơ sở để ứng dụng trong việc chụp X-quang y tế.', isTrue: true, exp: 'Đúng. Tia X tác dụng mạnh lên kính ảnh. Vùng tia X đi xuyên qua mô mềm đập vào phim làm phim đen đi, vùng bị xương cản lại thì phim giữ màu trắng.' },
                { id: 'b', text: 'Tia X là một dạng bức xạ ion hóa, có khả năng làm bật các electron ra khỏi nguyên tử và phân tử không khí, khiến không khí trở nên dẫn điện.', isTrue: true, exp: 'Đúng. Do năng lượng photon cao ($E = hf$), tia X dễ dàng ion hóa các chất khí.' },
                { id: 'c', text: 'Tia X "cứng" là tia X có bước sóng càng dài, có tính đâm xuyên càng yếu.', isTrue: false, exp: 'Sai. Tia X "cứng" là thuật ngữ kĩ thuật dùng để chỉ tia X mang năng lượng cao, tức là có tần số lớn và bước sóng càng ngắn, sức đâm xuyên càng mạnh.' },
                { id: 'd', text: 'Trong công nghiệp luyện kim, tia X được sử dụng để kiểm tra, tìm các bọt khí hoặc vết nứt hở ẩn sâu bên trong các khối kim loại đúc.', isTrue: true, exp: 'Đúng. Đây là kĩ thuật chụp khuyết tật không phá hủy (NDT) cực kì quan trọng trong kĩ thuật cơ khí và đúc kim loại.' }
            ]
        },
        {
            id: 'tu_34',
            context: '<strong>Câu 9. (Tính toán định lượng đơn giản về Sóng điện từ)</strong><br>Cho một chùm bức xạ điện từ lan truyền trong chân không với tốc độ $c = 3 \\cdot 10^8$ m/s. Tần số của bức xạ đo được là $f = 6 \\cdot 10^{14}$ Hz.',
            statements: [
                { id: 'a', text: 'Chu kì dao động của điện từ trường trong chùm bức xạ này là xấp xỉ $1,67 \\cdot 10^{-15}$ s.', isTrue: true, exp: 'Đúng. Chu kì $T = \\frac{1}{f} = \\frac{1}{6 \\cdot 10^{14}} \\approx 1,67 \\cdot 10^{-15}$ s.' },
                { id: 'b', text: 'Bước sóng của chùm bức xạ này lan truyền trong chân không là 500 nm.', isTrue: true, exp: 'Đúng. Áp dụng $\\lambda = \\frac{c}{f} = \\frac{3 \\cdot 10^8}{6 \\cdot 10^{14}} = 0,5 \\cdot 10^{-6}$ m = 500 nm.' },
                { id: 'c', text: 'Dựa vào thang sóng điện từ, bức xạ mang tần số trên thuộc dải tia tử ngoại vì không thể nhìn thấy bằng mắt thường.', isTrue: false, exp: 'Sai. Bước sóng 500 nm nằm gọn trong khoảng từ 380 nm đến 760 nm. Do đó, bức xạ này thuộc vùng ánh sáng nhìn thấy (cụ thể là màu xanh lục), không phải tia tử ngoại.' },
                { id: 'd', text: 'Nếu chùm bức xạ này truyền từ chân không vào một khối thủy tinh (có chiết suất $n = 1,5$), bước sóng của nó bên trong khối thủy tinh sẽ giảm xuống còn 333 nm.', isTrue: true, exp: 'Đúng. Trong môi trường có chiết suất $n$, bước sóng giảm $n$ lần: $\\lambda\' = \\frac{\\lambda}{n} = \\frac{500}{1,5} \\approx 333,3$ nm.' }
            ]
        },
        {
            id: 'tu_35',
            context: '<strong>Câu 10. (Môi trường vật chất và sự truyền Sóng điện từ)</strong><br>Sự tương tác của sóng điện từ với môi trường quyết định các ứng dụng che chắn và truyền thông.',
            statements: [
                { id: 'a', text: 'Khí quyển Trái Đất (đặc biệt là tầng Ozon) hấp thụ rất mạnh tia tử ngoại có bước sóng ngắn từ Mặt Trời, bảo vệ sự sống trên mặt đất.', isTrue: true, exp: 'Đúng. Tầng Ozon ($O_3$) hấp thụ hầu hết bức xạ UV-B và UV-C chết người.' },
                { id: 'b', text: 'Nước tinh khiết và thủy tinh thông thường hoàn toàn trong suốt đối với ánh sáng nhìn thấy, đồng thời cũng trong suốt (cho truyền qua) đối với tia tử ngoại và tia hồng ngoại.', isTrue: false, exp: 'Sai. Nước và thủy tinh rất trong suốt với ánh sáng khả kiến, nhưng lại hấp thụ rất mạnh tia tử ngoại và tia hồng ngoại. (Đó là lí do ngồi trong xe hơi đóng kín cửa kính sẽ ít bị cháy nắng đen da do tia tử ngoại).' },
                { id: 'c', text: 'Cửa kính của lò vi sóng (Microwave oven) luôn được gắn một lớp lưới kim loại để phản xạ toàn bộ sóng vi ba, ngăn không cho sóng lọt ra ngoài gây nguy hiểm.', isTrue: true, exp: 'Đúng. Lưới kim loại hoạt động như một lồng Faraday. Mắt lưới nhỏ hơn bước sóng của vi ba (khoảng 12 cm) nên sóng vi ba bị phản xạ lại hoàn toàn, trong khi ánh sáng khả kiến (bước sóng nano mét) vẫn xuyên qua được để ta nhìn thấy thức ăn.' },
                { id: 'd', text: 'Để liên lạc với các tàu ngầm đang lặn sâu dưới đáy biển, người ta không thể dùng dải sóng cực ngắn mà bắt buộc phải dùng dải sóng cực dài vì chúng có khả năng đâm xuyên qua lớp nước biển tốt hơn.', isTrue: true, exp: 'Đúng. Nước biển (dẫn điện) hấp thụ sóng điện từ tần số cao rất mạnh. Chỉ có dải sóng cực dài (VLF/ELF, tần số từ 3 - 30 kHz) mới có khả năng đâm xuyên qua hàng chục mét nước biển để truyền tín hiệu quân sự cho tàu ngầm.' }
            ]
        },
        {
            id: 'tu_36',
            context: '<strong>Câu 1. (Nguyên tắc tạo ra dòng điện xoay chiều)</strong><br>Một khung dây dẫn phẳng, dẹt, hình chữ nhật gồm $N$ vòng dây, diện tích mỗi vòng là $S$. Khung dây được quay đều với tốc độ góc $\\omega$ quanh một trục cố định nằm trong mặt phẳng khung, đặt trong một từ trường đều $\\vec{B}$ vuông góc với trục quay.',
            statements: [
                { id: 'a', text: 'Từ thông qua khung dây biến thiên điều hòa theo thời gian, là nguyên nhân sinh ra suất điện động cảm ứng trong khung.', isTrue: true, exp: 'Đúng. Hiện tượng cảm ứng điện từ do từ thông biến thiên điều hòa là cơ sở vật lí để tạo ra dòng điện xoay chiều.' },
                { id: 'b', text: 'Khi mặt phẳng khung dây nằm song song với các đường sức từ thì từ thông qua khung dây đạt giá trị cực đại.', isTrue: false, exp: 'Sai. Khi mặt phẳng khung dây song song với đường sức từ, góc giữa pháp tuyến và $\\vec{B}$ là $90^\\circ \\Rightarrow \\cos 90^\\circ = 0$. Từ thông lúc này bằng 0. (Từ thông cực đại khi mặt phẳng vuông góc với $\\vec{B}$).' },
                { id: 'c', text: 'Suất điện động cảm ứng sinh ra trong khung dây luôn trễ pha $\\frac{\\pi}{2}$ so với từ thông qua khung dây.', isTrue: true, exp: 'Đúng. Giả sử $\\Phi = \\Phi_0 \\cos(\\omega t)$. Theo định luật Faraday $e = -\\Phi\' = \\omega \\Phi_0 \\sin(\\omega t) = E_0 \\cos(\\omega t - \\pi/2)$. Do đó, suất điện động $e$ luôn trễ pha $\\pi/2$ so với từ thông $\\Phi$.' },
                { id: 'd', text: 'Nếu tăng diện tích $S$ của khung dây lên 10% và tăng tốc độ quay $\\omega$ lên 10%, biên độ của suất điện động cảm ứng sẽ tăng lên 21%.', isTrue: true, exp: 'Đúng. Công thức biên độ suất điện động $E_0 = \\omega NBS$. Gọi $S\' = 1,1S$ và $\\omega\' = 1,1\\omega$. Ta có $E_0\' = (1,1\\omega)NB(1,1S) = 1,21 \\cdot (\\omega NBS) = 1,21E_0$. Suất điện động tăng 21%.' }
            ]
        },
        {
            id: 'tu_37',
            context: '<strong>Câu 2. (Các đại lượng đặc trưng của điện áp xoay chiều)</strong><br>Điện áp xoay chiều cấp cho một thiết bị điện trong gia đình có biểu thức $u = 220\\sqrt{2}\\cos(100\\pi t - \\pi/3)$ (V) (với $t$ tính bằng giây).',
            statements: [
                { id: 'a', text: 'Điện áp hiệu dụng của mạng điện này là 220 V.', isTrue: true, exp: 'Đúng. Biên độ điện áp $U_0 = 220\\sqrt{2}$ V. Điện áp hiệu dụng $U = \\frac{U_0}{\\sqrt{2}} = 220$ V.' },
                { id: 'b', text: 'Tần số của dòng điện này là 100 Hz.', isTrue: false, exp: 'Sai. Tần số góc $\\omega = 100\\pi$ rad/s. Tần số $f = \\frac{\\omega}{2\\pi} = 50$ Hz.' },
                { id: 'c', text: 'Tại thời điểm ban đầu ($t = 0$), điện áp tức thời ở hai đầu thiết bị có độ lớn là $110\\sqrt{2}$ V.', isTrue: true, exp: 'Đúng. Thay $t = 0$ vào phương trình: $u = 220\\sqrt{2}\\cos(-\\pi/3) = 220\\sqrt{2} \\cdot (0,5) = 110\\sqrt{2}$ V.' },
                { id: 'd', text: 'Nếu cắm trực tiếp một tụ điện có ghi điện áp giới hạn (điện áp đánh thủng) là 250 V vào mạng điện này, tụ điện sẽ hoạt động bình thường mà không bị hỏng.', isTrue: false, exp: 'Sai. Điện áp giới hạn của linh kiện phải chịu được mức điện áp cực đại (đỉnh) của mạng điện. Mạng điện có $U_0 \\approx 311$ V, lớn hơn mức chịu đựng 250 V của tụ. Tụ điện sẽ bị đánh thủng (nổ) ngay lập tức.' }
            ]
        },
        {
            id: 'tu_38',
            context: '<strong>Câu 3. (Bản chất của Giá trị hiệu dụng và Đo lường)</strong>',
            statements: [
                { id: 'a', text: 'Khái niệm cường độ dòng điện hiệu dụng của dòng điện xoay chiều được xây dựng dựa trên tác dụng nhiệt của dòng điện.', isTrue: true, exp: 'Đúng. Định nghĩa: Dòng điện xoay chiều có giá trị hiệu dụng $I$ tỏa ra một nhiệt lượng bằng đúng nhiệt lượng do dòng điện không đổi cường độ $I$ sinh ra trong cùng một thời gian.' },
                { id: 'b', text: 'Cho dòng điện xoay chiều $i = I_0\\cos(\\omega t)$ chạy qua một điện trở $R$. Nhiệt lượng tỏa ra trên $R$ sau thời gian $t$ đủ lớn được tính bằng $Q = I_0^2 R t$.', isTrue: false, exp: 'Sai. Công thức tính nhiệt lượng theo giá trị hiệu dụng là $Q = I^2 R t$. Nếu viết theo giá trị cực đại, phải là $Q = \\frac{I_0^2}{2} R t$.' },
                { id: 'c', text: 'Ampe kế và Vôn kế dùng trong mạng điện xoay chiều luôn hiển thị giá trị hiệu dụng của dòng điện và điện áp.', isTrue: true, exp: 'Đúng. Các dụng cụ đo lường xoay chiều được thiết kế để hiển thị giá trị hiệu dụng nhằm thuận tiện cho tính toán công suất.' },
                { id: 'd', text: 'Nếu dùng một Ampe kế khung quay một chiều (DC) để đo cường độ dòng điện xoay chiều 50 Hz, kim đồng hồ sẽ chỉ giá trị 0.', isTrue: true, exp: 'Đúng. Ampe kế khung quay (từ điện) chỉ đo được giá trị trung bình. Dòng xoay chiều đổi chiều 100 lần mỗi giây, quán tính của kim không theo kịp nên nó đứng yên ở vạch số 0.' }
            ]
        },
        {
            id: 'tu_39',
            context: '<strong>Câu 4. (Tác dụng và ứng dụng của dòng điện xoay chiều)</strong><br>Dòng điện xoay chiều có nhiều ưu điểm vượt trội so với dòng điện một chiều trong sản xuất và đời sống.',
            statements: [
                { id: 'a', text: 'Bóng đèn sợi đốt có thể phát sáng khi sử dụng cả dòng điện xoay chiều lẫn dòng điện một chiều.', isTrue: true, exp: 'Đúng. Bóng đèn sợi đốt hoạt động dựa trên tác dụng nhiệt ($I^2R$), không phụ thuộc vào chiều dòng điện.' },
                { id: 'b', text: 'Có thể sử dụng trực tiếp dòng điện xoay chiều từ điện lưới để nạp điện cho bình ắc quy xe máy.', isTrue: false, exp: 'Sai. Tác dụng hóa học (mạ điện, nạp ắc quy) đòi hỏi dòng điện phải dịch chuyển theo một chiều cố định (dòng DC). Để nạp ắc quy, phải dùng bộ chỉnh lưu chuyển xoay chiều thành một chiều.' },
                { id: 'c', text: 'Dòng điện xoay chiều ba pha có khả năng tạo ra từ trường quay, đây là nguyên lí cốt lõi để vận hành các động cơ không đồng bộ trong công nghiệp.', isTrue: true, exp: 'Đúng. Ba cuộn dây lệch nhau $120^\\circ$ mang ba dòng xoay chiều lệch pha nhau $120^\\circ$ sẽ tạo ra véc-tơ cảm ứng từ tổng hợp quay đều.' },
                { id: 'd', text: 'Ưu điểm lớn nhất khiến dòng điện xoay chiều thay thế hoàn toàn dòng điện một chiều trong lưới điện quốc gia là do nó dễ dàng tăng/giảm điện áp bằng máy biến áp.', isTrue: true, exp: 'Đúng. Việc dùng máy biến áp để nâng điện áp lên siêu cao áp (500 kV) giúp giảm hao phí $I^2R$ đi hàng vạn lần, điều mà thời điểm đó hệ thống điện một chiều của Thomas Edison không làm được.' }
            ]
        },
        {
            id: 'tu_40',
            context: '<strong>Câu 5. (Phân tích đồ thị dao động xoay chiều)</strong><br>Màn hình của một dao động kí điện tử (Oscilloscope) hiển thị đồ thị cường độ dòng điện $i$ (A) theo thời gian $t$ (ms). Đồ thị là một đường hình sin, tại thời điểm $t = 0$ dòng điện bằng 0 và đang tăng. Dòng điện đạt giá trị cực đại +4 A lần đầu tiên tại mốc thời gian $t = 5$ ms.',
            statements: [
                { id: 'a', text: 'Chu kì của dòng điện xoay chiều này là 10 ms.', isTrue: false, exp: 'Sai. Từ vị trí cân bằng (0) đến vị trí biên dương (cực đại) mất thời gian là $1/4$ chu kì ($T/4 = 5$ ms). Do đó, chu kì $T = 20$ ms $= 0,02$ s.' },
                { id: 'b', text: 'Cường độ dòng điện hiệu dụng chạy trong mạch là $2\\sqrt{2}$ A.', isTrue: true, exp: 'Đúng. Biên độ $I_0 = 4$ A $\\Rightarrow$ Giá trị hiệu dụng $I = \\frac{I_0}{\\sqrt{2}} = \\frac{4}{\\sqrt{2}} = 2\\sqrt{2}$ A.' },
                { id: 'c', text: 'Tần số của dòng điện xoay chiều này là 50 Hz.', isTrue: true, exp: 'Đúng. $T = 0,02$ s $\\Rightarrow f = \\frac{1}{T} = 50$ Hz.' },
                { id: 'd', text: 'Biểu thức cường độ dòng điện tức thời là $i = 4\\cos(100\\pi t - \\pi/2)$ (A) (với $t$ tính bằng giây).', isTrue: true, exp: 'Đúng. $\\omega = 2\\pi f = 100\\pi$ rad/s. Tại $t=0$, $i=0$ và đang tăng (đi theo chiều dương) $\\Rightarrow$ Pha ban đầu $\\varphi = -\\pi/2$. Biểu thức đúng là $i = 4\\cos(100\\pi t - \\pi/2)$.' }
            ]
        },
        {
            id: 'tu_41',
            context: '<strong>Câu 6. (Truyền tải điện năng đi xa)</strong><br>Một nhà máy thủy điện truyền tải công suất điện $P$ lên đường dây tải điện một pha có điện trở $R$. Hệ số công suất của đường dây luôn bằng 1. Điện áp hiệu dụng tại trạm phát là $U$.',
            statements: [
                { id: 'a', text: 'Độ sụt áp (độ giảm điện thế) dọc đường dây tải điện được tính bằng biểu thức $\\Delta U = \\frac{PR}{U}$.', isTrue: true, exp: 'Đúng. Dòng điện truyền tải $I = \\frac{P}{U}$. Độ sụt áp $\\Delta U = I \\cdot R = \\frac{P}{U} \\cdot R$.' },
                { id: 'b', text: 'Công suất hao phí tỏa nhiệt trên đường dây truyền tải tỉ lệ thuận với bình phương điện áp phát $U$.', isTrue: false, exp: 'Sai. Công suất hao phí $\\Delta P = I^2R = \\frac{P^2R}{U^2}$. Do đó $\\Delta P$ tỉ lệ nghịch với bình phương điện áp $U$.' },
                { id: 'c', text: 'Nếu nhà máy dùng máy biến áp để nâng điện áp $U$ lên gấp 10 lần trước khi truyền đi, công suất hao phí do tỏa nhiệt sẽ giảm đi 100 lần.', isTrue: true, exp: 'Đúng. Vì $\\Delta P \\sim \\frac{1}{U^2}$, nên khi $U$ tăng 10 lần thì mẫu số tăng 100 lần $\\Rightarrow \\Delta P$ giảm 100 lần.' },
                { id: 'd', text: 'Biện pháp làm giảm điện trở $R$ của đường dây (bằng cách dùng dây dẫn đồng to hơn) ít được áp dụng thực tế hơn so với biện pháp tăng điện áp $U$.', isTrue: true, exp: 'Đúng. $R = \\rho \\frac{l}{S}$. Để giảm $R$ 100 lần thì tiết diện $S$ (và khối lượng dây, chi phí vật liệu, độ cứng của cột trụ) phải tăng 100 lần, điều này bất khả thi về mặt kinh tế và kĩ thuật. Tăng áp là phương án tối ưu nhất.' }
            ]
        },
        {
            id: 'tu_42',
            context: '<strong>Câu 7. (An toàn điện: Nguyên lí của Aptomat chống dòng rò - RCCB)</strong><br>Aptomat chống dòng rò (RCCB hay ELCB) là thiết bị an toàn bắt buộc trong các gia đình hiện đại để phòng chống điện giật.',
            statements: [
                { id: 'a', text: 'RCCB hoạt động dựa trên nguyên tắc so sánh cường độ dòng điện chạy trên dây pha (dây nóng) và dòng điện chạy trên dây trung tính.', isTrue: true, exp: 'Đúng. Nó có một lõi biến dòng cảm biến sự chênh lệch dòng điện đi và dòng điện về.' },
                { id: 'b', text: 'Trong trạng thái hoạt động bình thường (không có sự cố), cường độ dòng điện trong dây pha luôn lớn hơn cường độ dòng điện trong dây trung tính để cung cấp năng lượng cho thiết bị.', isTrue: false, exp: 'Sai. Theo định luật bảo toàn điện tích, trong mạch kín bình thường, dòng điện đi từ dây pha vào thiết bị phải bằng đúng dòng điện từ thiết bị trở về dây trung tính ($I_{\\text{pha}} = I_{\\text{trung tính}}$).' },
                { id: 'c', text: 'Khi một người vô tình chạm tay vào vỏ tủ lạnh bị rò điện, một dòng điện sẽ truyền qua cơ thể người xuống đất. Sự cố này làm mạch điện của RCCB bị mất cân bằng và lập tức ngắt cầu dao.', isTrue: true, exp: 'Đúng. Dòng rò qua người xuống đất khiến dòng điện trở về dây trung tính bị hụt ($I_{\\text{pha}} > I_{\\text{trung tính}}$). Sự chênh lệch này kích hoạt cuộn dây ngắt mạch bảo vệ.' },
                { id: 'd', text: 'Việc lắp đặt RCCB có thể thay thế hoàn toàn đường dây tiếp địa (dây nối đất) của các ổ cắm 3 chấu trong gia đình.', isTrue: false, exp: 'Sai. RCCB chỉ ngắt mạch sau khi đã có dòng điện rò chạy qua người (người đã bị giật một khoảnh khắc). Dây tiếp địa ngăn ngừa bằng cách truyền dòng rò trực tiếp xuống đất ngay khi vỏ máy chạm điện, làm Aptomat ngắt mạch ngay cả khi người chưa chạm vào. Hai hệ thống này phải bổ trợ cho nhau.' }
            ]
        },
        {
            id: 'tu_43',
            context: '<strong>Câu 8. (Quy tắc an toàn mạng điện dân dụng sinh hoạt)</strong><br>Điện lưới sinh hoạt ở Việt Nam là mạng điện xoay chiều một pha có điện áp hiệu dụng 220 V, tần số 50 Hz.',
            statements: [
                { id: 'a', text: 'Dây pha (dây nóng) mang điện áp xoay chiều 220 V so với mặt đất, còn dây trung tính (dây nguội) có điện thế bằng 0 V so với mặt đất.', isTrue: true, exp: 'Đúng. Tại trạm biến áp, dây trung tính được nối đất trực tiếp nên điện thế của nó xấp xỉ 0 so với mặt đất.' },
                { id: 'b', text: 'Để thay bóng đèn trần bị cháy một cách an toàn tuyệt đối, người dùng chỉ cần tắt công tắc gắn trên tường điều khiển bóng đèn đó là đủ.', isTrue: false, exp: 'Sai. Rất nhiều hệ thống điện thợ đấu nhầm công tắc vào dây trung tính. Khi tắt công tắc, đèn tắt nhưng dây pha (có điện 220 V) vẫn chờ sẵn ở đui đèn. Chạm vào vẫn bị giật. An toàn tuyệt đối là phải sập cầu dao/Aptomat tổng của nhánh đó.' },
                { id: 'c', text: 'Mức độ nguy hiểm của điện giật đối với cơ thể người chủ yếu do cường độ dòng điện (A) quyết định chứ không chỉ riêng điện áp (V).', isTrue: true, exp: 'Đúng. Cường độ dòng điện trực tiếp tác động lên hệ thần kinh gây co cơ và rung tim. Tuy nhiên dòng điện này lớn hay nhỏ lại phụ thuộc vào điện áp và điện trở cơ thể ($I = U/R_{\\text{người}}$).' },
                { id: 'd', text: 'Cầu chì và các thiết bị ngắt mạch (Aptomat) luôn phải được lắp trên dây pha, tuyệt đối không được lắp chỉ trên dây trung tính.', isTrue: true, exp: 'Đúng. Nếu cầu chì đứt ở dây trung tính, thiết bị ngừng hoạt động nhưng toàn bộ thiết bị vẫn đang kết nối trực tiếp với dây pha, cực kì nguy hiểm nếu người dùng tháo thiết bị ra sửa. Phải lắp ở dây pha để cắt triệt để nguồn điện.' }
            ]
        },
        {
            id: 'tu_44',
            context: '<strong>Câu 9. (Hiểu lầm về Cảm ứng từ và Dòng điện xoay chiều)</strong><br>Một học sinh quan sát máy phát điện xoay chiều một pha và đưa ra các nhận định sau:',
            statements: [
                { id: 'a', text: 'Nếu quay rôto bằng tay với tốc độ rất chậm, từ thông qua khung dây không thay đổi, máy sẽ không phát ra điện.', isTrue: false, exp: 'Sai. Dù quay chậm, từ thông qua khung dây vẫn có biến thiên (dù tốc độ biến thiên nhỏ). Do đó, suất điện động vẫn sinh ra nhưng có giá trị rất nhỏ và tần số rất thấp, chứ không phải là "không phát ra điện".' },
                { id: 'b', text: 'Giá trị tức thời của cường độ dòng điện có thể lớn hơn giá trị hiệu dụng của nó trong một khoảng thời gian nhất định của chu kì.', isTrue: true, exp: 'Đúng. Biểu thức $i = I_0 \\cos(\\omega t)$. Giá trị cực đại $I_0$ lớn hơn giá trị hiệu dụng $I = I_0/\\sqrt{2}$ khoảng 1,414 lần. Khi pha dao động gần bằng 0 hoặc $\\pi$, $|i|$ sẽ vọt lên lớn hơn $I$.' },
                { id: 'c', text: 'Động năng của dòng nước hoặc tuabin gió chính là nguồn năng lượng gốc được chuyển hóa thành điện năng trong các máy phát điện.', isTrue: true, exp: 'Đúng. Tuabin cung cấp cơ năng (từ động năng của nước/gió) làm quay rôto. Theo định luật bảo toàn năng lượng, cơ năng này biến thành điện năng.' },
                { id: 'd', text: 'Suất điện động của máy phát điện xoay chiều đạt độ lớn cực đại tại cùng thời điểm từ thông qua khung dây cũng đạt độ lớn cực đại.', isTrue: false, exp: 'Sai. $e = -\\Phi\'$. Hàm sin và hàm cos lệch pha nhau $90^\\circ$. Khi từ thông $\\Phi$ cực đại thì suất điện động $e$ bằng 0. Khi $\\Phi$ bằng 0 thì $e$ đạt cực đại.' }
            ]
        },
        {
            id: 'tu_45',
            context: '<strong>Câu 10. (Tính toán Năng lượng và Tác dụng nhiệt)</strong><br>Một ấm đun nước điện có điện trở $R = 40\\text{ }\\Omega$ (coi không đổi theo nhiệt độ). Đem cắm ấm này vào mạng điện xoay chiều gia đình $u = 220\\sqrt{2}\\cos(100\\pi t)$ (V).',
            statements: [
                { id: 'a', text: 'Cường độ dòng điện cực đại chạy qua dây điện trở của ấm là 5,5 A.', isTrue: false, exp: 'Sai. Điện áp hiệu dụng $U = 220$ V $\\Rightarrow$ Dòng điện hiệu dụng $I = \\frac{U}{R} = \\frac{220}{40} = 5,5$ A. Cường độ dòng điện cực đại phải là $I_0 = 5,5\\sqrt{2}$ A.' },
                { id: 'b', text: 'Công suất tỏa nhiệt định mức của chiếc ấm điện này là 1210 W.', isTrue: true, exp: 'Đúng. Công suất tỏa nhiệt (công suất trung bình) tính theo giá trị hiệu dụng: $P = \\frac{U^2}{R} = \\frac{220^2}{40} = 1210$ W.' },
                { id: 'c', text: 'Nếu thay nguồn điện xoay chiều trên bằng một nguồn điện một chiều (DC) có điện áp đúng bằng 220 V, thời gian đun sôi một ấm nước sẽ không thay đổi.', isTrue: true, exp: 'Đúng. Điện áp xoay chiều hiệu dụng 220 V có tác dụng tỏa nhiệt tương đương hoàn toàn với điện áp một chiều 220 V. Do đó công suất $P$ như nhau $\\Rightarrow$ thời gian đun sôi như nhau.' },
                { id: 'd', text: 'Trong quá trình ấm đun hoạt động với điện xoay chiều, công suất tỏa nhiệt tức thời trên dây điện trở luôn là một hằng số 1210 W tại mọi thời điểm $t$.', isTrue: false, exp: 'Sai. Công suất tức thời $p(t) = i^2 R = I_0^2 R \\cos^2(\\omega t) = \\frac{I_0^2 R}{2} [1 + \\cos(2\\omega t)]$. Nó là một hàm dao động tuần hoàn từ 0 đến cực đại 2420 W, chứ không phải hằng số. Giá trị 1210 W chỉ là công suất trung bình trong một chu kì.' }
            ]
        },
        {
            id: 'tu_46',
            context: '<strong>Câu 1. (Nguyên tắc an toàn mạng điện dân dụng sinh hoạt)</strong><br>Mạng điện sinh hoạt gia đình ở Việt Nam là mạng xoay chiều một pha (220V - 50Hz) gồm dây pha (dây nóng) và dây trung tính (dây nguội). Để đảm bảo an toàn, các gia đình phải tuân thủ nghiêm ngặt các quy tắc thiết kế và sử dụng.',
            statements: [
                { id: 'a', text: 'Dây trung tính được nối đất tại trạm biến áp nên điện thế của nó so với mặt đất bằng 0V, chạm vào dây trung tính sẽ không bao giờ bị điện giật.', isTrue: false, exp: 'Sai. Mặc dù dây trung tính được nối đất tại trạm, nhưng do đường dây truyền tải có điện trở, khi có các tải tiêu thụ lớn hoạt động không cân bằng, dây trung tính tại nhà vẫn có thể xuất hiện một điện áp (điện thế trôi) gây giật nhẹ hoặc nguy hiểm nếu đứt dây trung tính (đứt "mát").' },
                { id: 'b', text: 'Các thiết bị bảo vệ đóng ngắt (Cầu chì, Aptomat) và công tắc điều khiển thiết bị luôn phải được lắp đặt trên dây pha.', isTrue: true, exp: 'Đúng. Lắp ở dây pha để khi ngắt mạch, thiết bị hoàn toàn bị cách li khỏi nguồn điện áp cao (220V), an toàn cho việc sửa chữa.' },
                { id: 'c', text: 'Khi tay bị ướt, điện trở của lớp da người sẽ giảm xuống rất mạnh, làm dòng điện chạy qua cơ thể tăng cao, gây nguy hiểm hơn nhiều so với khi tay khô.', isTrue: true, exp: 'Đúng. Điện trở người khô khoảng $10.000\\text{ }\\Omega - 100.000\\text{ }\\Omega$, nhưng khi ướt chỉ còn khoảng $1.000\\text{ }\\Omega$. Theo định luật Ohm $I = U/R$, điện trở giảm làm dòng điện tăng vọt đến mức chết người.' },
                { id: 'd', text: 'Việc một con chim đậu trên một đường dây pha cao thế trần không bị điện giật là do chân chim có cấu tạo bằng lớp sừng cách điện hoàn toàn.', isTrue: false, exp: 'Sai. Chim không bị giật vì hai chân chim đậu trên cùng một sợi dây. Khoảng cách hai chân rất gần nên độ chênh lệch điện thế (hiệu điện thế) giữa hai chân chim xấp xỉ bằng 0 V. Không có hiệu điện thế thì không có dòng điện chạy qua cơ thể con chim.' }
            ]
        },
        {
            id: 'tu_47',
            context: '<strong>Câu 2. (Cơ chế hoạt động của Aptomat chống dòng rò - RCCB/ELCB)</strong><br>Aptomat chống rò (cầu dao chống giật) là thiết bị bảo vệ sinh mạng con người. Lõi của thiết bị là một biến dòng cảm ứng đo sự chênh lệch dòng điện giữa dây pha và dây trung tính.',
            statements: [
                { id: 'a', text: 'Trong điều kiện các thiết bị điện hoạt động bình thường và không bị rò rỉ, tổng cường độ dòng điện đi ra ở dây pha luôn lớn hơn dòng điện trở về ở dây trung tính do điện năng đã bị tiêu thụ.', isTrue: false, exp: 'Sai. Điện năng biến thành công/nhiệt, nhưng điện tích không bị mất đi. Theo định luật bảo toàn điện tích, dòng điện đi từ dây pha luôn bằng đúng dòng điện trở về dây trung tính ($I_{\\text{pha}} = I_{\\text{trung tính}}$).' },
                { id: 'b', text: 'Khi một người chạm tay vào vỏ máy giặt bị rò điện, một phần dòng điện từ dây pha đi qua cơ thể người truyền xuống đất, làm dòng điện trở về dây trung tính bị hụt đi.', isTrue: true, exp: 'Đúng. Đây chính là sự "rò rỉ" điện. Dòng điện chia làm hai nhánh (một về dây trung tính, một qua người xuống đất) nên $I_{\\text{pha}} > I_{\\text{trung tính}}$. RCCB phát hiện độ lệch này và ngắt điện.' },
                { id: 'c', text: 'Nếu có sự cố đoản mạch (chập hai dây pha và trung tính vào nhau), dòng điện tăng vọt lên hàng trăm Ampe, Aptomat chống dòng rò sẽ lập tức ngắt mạch nhờ chức năng phát hiện dòng rò.', isTrue: false, exp: 'Sai. Ngắn mạch làm dòng tăng vọt ở cả hai dây pha và trung tính, do đó độ chênh lệch dòng điện vẫn bằng 0 ($I_{\\text{pha}} = I_{\\text{trung tính}}$). RCCB (loại thuần túy) không ngắt khi bị ngắn mạch. Chức năng ngắt ngắn mạch là của MCB (Aptomat thường).' },
                { id: 'd', text: 'Aptomat chống giật có thể đo được dòng rò rất nhỏ (ví dụ 30 mA) và cắt điện cực nhanh (khoảng 0,03 giây) để cứu sống nạn nhân.', isTrue: true, exp: 'Đúng. Dòng điện 30 mA đi qua tim trong thời gian rất ngắn đã đủ gây nguy hiểm, RCCB được thiết kế với ngưỡng nhạy cảm 30 mA để ngắt tức thời.' }
            ]
        },
        {
            id: 'tu_48',
            context: '<strong>Câu 3. (Hệ thống tiếp địa bảo vệ - Dây nối đất)</strong><br>Các thiết bị gia dụng có vỏ kim loại (tủ lạnh, lò nướng) luôn được trang bị phích cắm 3 chấu để kết nối với hệ thống dây tiếp địa của tòa nhà.',
            statements: [
                { id: 'a', text: 'Chấu thứ 3 (chấu tiếp địa) trên phích cắm luôn được thiết kế dài hơn hai chấu còn lại để tiếp xúc với điện cực nối đất trước khi hai chấu mang điện chạm vào ổ cắm.', isTrue: true, exp: 'Đúng. Chấu nối đất dài hơn nhằm đảm bảo thiết bị được nối đất bảo vệ trước khi được cấp điện, và khi rút phích cắm thì ngắt điện trước rồi mới ngắt nối đất.' },
                { id: 'b', text: 'Nếu vỏ máy bị rò điện, dây nối đất tạo ra một đường dẫn có điện trở rất nhỏ truyền dòng điện xuống lòng đất, giữ cho điện thế của vỏ máy luôn xấp xỉ bằng 0 V.', isTrue: true, exp: 'Đúng. Dây nối đất có điện trở $R < 4\\text{ }\\Omega$, rất nhỏ so với điện trở người ($1000\\text{ }\\Omega$). Theo định luật phân nhánh dòng điện, phần lớn dòng điện sẽ ưu tiên đi qua dây nối đất, dòng qua người rất nhỏ.' },
                { id: 'c', text: 'Do dòng rò chạy qua dây nối đất rất lớn, nó sẽ làm đứt cầu chì hoặc kích hoạt Aptomat ngắt toàn bộ mạch điện, loại bỏ triệt để nguồn nguy hiểm.', isTrue: true, exp: 'Đúng. Dòng rò lớn qua dây nối đất giống như một hiện tượng chạm chập (ngắn mạch một phần), dòng điện vượt quá tải sẽ làm nhảy cầu dao tự động (MCB).' },
                { id: 'd', text: 'Trong trường hợp nhà không có đường dây nối đất chuẩn, người dùng có thể dùng một sợi dây điện nối từ vỏ máy xả thẳng vào ống dẫn nước bằng nhựa của gia đình để thay thế.', isTrue: false, exp: 'Sai. Nhựa là chất cách điện hoàn toàn. Nối vỏ máy vào ống nhựa không thể tản dòng điện xuống đất, thiết bị vẫn gây giật chết người. Phải nối vào cọc đồng đóng sâu dưới đất sét ẩm.' }
            ]
        },
        {
            id: 'tu_49',
            context: '<strong>Câu 4. (Điện áp bước và Hành động thoát hiểm)</strong><br>Khi dây dẫn điện siêu cao áp bị đứt và rơi xuống nền đất, dòng điện cực lớn sẽ truyền từ điểm chạm đất lan tỏa ra xung quanh, tạo ra các vành đai điện thế giảm dần theo khoảng cách.',
            statements: [
                { id: 'a', text: 'Điện áp bước là sự chênh lệch điện thế (hiệu điện thế) giữa hai bàn chân của con người khi đứng hoặc bước đi trong khu vực có dòng điện lan truyền dưới đất.', isTrue: true, exp: 'Đúng. Đây là định nghĩa vật lí chuẩn xác của "Điện áp bước" (Step Voltage).' },
                { id: 'b', text: 'Khoảng cách giữa hai bước chân càng lớn thì điện áp bước càng nhỏ, do đó để thoát ra khỏi vùng nguy hiểm cần phải sải bước chạy thật nhanh và dài.', isTrue: false, exp: 'Sai. Khoảng cách hai chân càng lớn thì nó cắt ngang qua các vòng đẳng thế càng nhiều $\\rightarrow$ chênh lệch điện thế (Điện áp bước $U$) càng lớn, dòng điện chạy qua cơ thể càng mạnh.' },
                { id: 'c', text: 'Nếu một đàn bò đi vào vùng có điện áp bước, chúng thường dễ bị điện giật chết hơn con người vì khoảng cách giữa hai chân trước và hai chân sau của chúng rất dài.', isTrue: true, exp: 'Đúng. Chân trước và chân sau của bò cách nhau rất xa (khoảng 1,5 m), tạo ra điện áp bước rất lớn. Dòng điện chạy từ chân trước qua tim đến chân sau gây tử vong ngay lập tức.' },
                { id: 'd', text: 'Cách thoát hiểm an toàn nhất khi phát hiện mình nằm trong vùng điện áp bước là chụm hai chân sát vào nhau rồi nhảy lò cò hoặc nhảy chụm chân ra khỏi khu vực đó.', isTrue: true, exp: 'Đúng. Chụm hai chân lại thì khoảng cách giữa hai chân xấp xỉ 0, điện áp bước $\\approx 0$ V, không có dòng điện đi qua nửa dưới cơ thể. Nhảy lò cò hoặc lê bước chụm chân là kĩ năng sinh tồn tiêu chuẩn.' }
            ]
        },
        {
            id: 'tu_50',
            context: '<strong>Câu 5. (Tổng hợp: Máy biến áp cách ly)</strong><br>Trong y tế, viễn thông và các bàn sửa chữa điện tử, người ta bắt buộc phải sử dụng Máy biến áp cách ly (Isolation Transformer) có tỉ số vòng dây $N_1 / N_2 = 1$. Cuộn sơ cấp nối với lưới điện 220V, cuộn thứ cấp cấp điện 220V cho thiết bị.',
            statements: [
                { id: 'a', text: 'Máy biến áp cách ly không thay đổi giá trị điện áp hiệu dụng nhưng lại tiêu tốn nhiều vật liệu đồng và sắt từ hơn so với việc nối thẳng vào mạng điện.', isTrue: true, exp: 'Đúng. Tỉ số $1:1$ không đổi áp, nhưng máy biến áp vẫn cồng kềnh, nặng và gây suy hao. Nó được dùng riêng cho mục đích an toàn, không phải truyền tải.' },
                { id: 'b', text: 'Cuộn sơ cấp và cuộn thứ cấp của biến áp cách ly hoàn toàn cách điện với nhau, năng lượng được truyền sang hoàn toàn thông qua từ trường biến thiên.', isTrue: true, exp: 'Đúng. Đây là bản chất "cách ly" về mặt điện học (Galvanic isolation).' },
                { id: 'c', text: 'Do cuộn thứ cấp không có điểm nào nối đất, nếu thợ điện (đang đứng dưới đất) vô tình chạm một tay vào một trong hai đầu dây của cuộn thứ cấp thì vẫn không bị điện giật.', isTrue: true, exp: 'Đúng. Bị giật khi có mạch điện kín chạy qua người. Vì cuộn thứ cấp lơ lửng (không nối đất), chạm 1 cực không tạo thành mạch kín xuyên qua người xuống đất, do đó an toàn.' },
                { id: 'd', text: 'Nếu thợ điện đồng thời cầm mỗi tay một đầu dây của cuộn thứ cấp thì người này vẫn an toàn nhờ đặc tính cách ly của máy biến áp.', isTrue: false, exp: 'Sai. Nếu chạm cả hai cực, cơ thể người sẽ đóng vai trò như một điện trở ($R$) nối tắt hai đầu cuộn thứ cấp. Mạch bị khép kín, dòng điện $I = 220/R$ chạy qua cơ thể gây giật điện tử vong.' }
            ]
        },
        {
            id: 'tu_51',
            context: '<strong>Câu 6. (Tổng hợp: An toàn truyền tải điện siêu cao áp - 500kV)</strong><br>Đường dây 500kV mang năng lượng khổng lồ. Từ trường và điện trường quanh đường dây này có tác động mạnh mẽ đến môi trường xung quanh.',
            statements: [
                { id: 'a', text: 'Đứng ngay dưới đường dây 500kV, ta thường nghe tiếng lách tách nhỏ. Đó là hiện tượng phóng điện vầng quang do điện trường cực mạnh làm ion hóa không khí xung quanh đường dây.', isTrue: true, exp: 'Đúng. Điện áp quá cao làm thủng khả năng cách điện cục bộ của không khí, tạo ra âm thanh lách tách và ánh sáng mờ (về đêm), gọi là Corona discharge.' },
                { id: 'b', text: 'Điện trường biến thiên từ đường dây siêu cao áp có thể cảm ứng ra một dòng điện gây giật nhẹ trên mái tôn kim loại của các ngôi nhà xây gần đó nếu mái tôn không được nối đất.', isTrue: true, exp: 'Đúng. Mái tôn đóng vai trò như một bản tụ điện khổng lồ trong điện trường biến thiên (hoặc vòng dây trong từ trường biến thiên), tích tụ tĩnh điện hoặc dòng cảm ứng.' },
                { id: 'c', text: 'Việc tăng điện áp lên mức 500kV nhằm mục đích làm tăng cường độ dòng điện truyền tải, từ đó cung cấp được nhiều công suất điện hơn cho vùng sâu vùng xa.', isTrue: false, exp: 'Sai. Tăng điện áp để giảm cường độ dòng điện ($I = P/U$), từ đó làm giảm mạnh hao phí do tỏa nhiệt ($I^2R$). Dòng điện truyền tải $I$ trên đường dây 500kV thực chất rất nhỏ so với điện áp thấp.' },
                { id: 'd', text: 'Người công nhân khi leo lên sửa chữa đường dây cao thế đang có điện ("sửa điện sống") phải mặc bộ quần áo đan bằng sợi kim loại bọc kín toàn thân.', isTrue: true, exp: 'Đúng. Bộ quần áo Faraday (đan bằng thép/bạc) tạo ra một lồng Faraday. Dòng điện rò sẽ chạy qua bộ quần áo (điện trở cực thấp) thay vì chạy qua cơ thể người, giữ điện thế toàn thân bằng điện thế đường dây.' }
            ]
        },
        {
            id: 'tu_52',
            context: '<strong>Câu 7. (Tổng hợp: Cảm ứng điện từ & Sạc không dây)</strong><br>Đế sạc không dây cho điện thoại thông minh hoạt động dựa trên định luật cảm ứng điện từ Faraday, khoảng cách truyền khoảng vài mm.',
            statements: [
                { id: 'a', text: 'Bên trong đế sạc có một cuộn dây phát được cấp dòng điện một chiều (DC) để tạo ra từ trường mạnh xuyên qua mặt lưng điện thoại.', isTrue: false, exp: 'Sai. Cảm ứng điện từ bắt buộc phải dùng từ trường biến thiên. Đế sạc phải sử dụng dòng điện xoay chiều (AC) có tần số cao.' },
                { id: 'b', text: 'Bên trong điện thoại có một cuộn dây thu. Từ trường biến thiên từ đế sạc xuyên qua cuộn dây thu, tạo ra dòng điện cảm ứng xoay chiều để nạp cho pin.', isTrue: true, exp: 'Đúng. Đây là ứng dụng nguyên lí của máy biến áp lõi không khí.' },
                { id: 'c', text: 'Nếu vô tình để một chiếc kẹp giấy bằng sắt kẹt giữa đế sạc và mặt lưng điện thoại đang sạc, chiếc kẹp giấy có thể bị nung nóng đỏ gây hỏa hoạn.', isTrue: true, exp: 'Đúng. Từ trường biến thiên tần số cao đi qua miếng kim loại sẽ sinh ra các dòng điện Foucault ngay bên trong nó. Hiệu ứng tỏa nhiệt Joule-Lenz làm miếng kim loại cực kì nóng (giống nguyên lí bếp từ).' },
                { id: 'd', text: 'Sạc không dây hiện nay luôn có hiệu suất truyền tải điện năng 100% vì không có sự hao phí trên dây dẫn cắm trực tiếp.', isTrue: false, exp: 'Sai. Sạc không dây có hiệu suất khá thấp (khoảng 70-80%). Phần lớn năng lượng bị hao phí do từ thông bị rò rỉ ra không gian (không đi hết vào cuộn thu) và do tỏa nhiệt trên cuộn dây.' }
            ]
        },
        {
            id: 'tu_53',
            context: '<strong>Câu 8. (Tổng hợp: Lực Lorentz & Màn hình CRT / Dao động kí)</strong><br>Màn hình tivi ống phóng tia âm cực (CRT) cũ hoặc máy Oscilloscope dùng trong phòng thí nghiệm phát ra một chùm electron tốc độ cực cao bắn vào màn hình phủ huỳnh quang.',
            statements: [
                { id: 'a', text: 'Chùm electron có năng lượng rất lớn, nếu tia này va chạm mạnh vào lớp thủy tinh của màn hình có thể bức xạ ra tia X (Tia Rơnghen) gây hại cho người xem.', isTrue: true, exp: 'Đúng. Electron tốc độ cao đập vào kim loại/thủy tinh dày sinh ra bức xạ hãm (Tia X). Tivi CRT luôn phải có lớp thủy tinh pha chì cực dày ở mặt trước để chặn tia X này.' },
                { id: 'b', text: 'Để điều khiển chùm electron quét từ trái sang phải, lên và xuống, người ta sử dụng các cuộn dây nam châm điện tạo ra từ trường biến thiên để bẻ cong quỹ đạo hạt theo lực Lorentz.', isTrue: true, exp: 'Đúng. Lực Lorentz $f = evB$ có hướng vuông góc với vận tốc electron, điều khiển chùm tia quét khắp màn hình.' },
                { id: 'c', text: 'Nếu đưa một thanh nam châm vĩnh cửu lại gần màn hình tivi CRT đang bật, hình ảnh trên tivi sẽ không bị ảnh hưởng vì sóng truyền hình là sóng điện từ không chịu tác dụng của từ trường.', isTrue: false, exp: 'Sai. Sóng truyền hình không bị ảnh hưởng, nhưng chùm electron (tạo ra hình ảnh) bên trong ống thì bị từ trường của nam châm bẻ cong quỹ đạo theo lực Lorentz. Kết quả là hình ảnh sẽ bị méo mó, lệch màu nghiêm trọng.' },
                { id: 'd', text: 'Công của lực từ (lực Lorentz) tác dụng lên chùm electron bằng 0, nên nó không làm thay đổi động năng của chùm hạt trước khi đập vào màn hình.', isTrue: true, exp: 'Đúng. Lực Lorentz luôn vuông góc với véc-tơ vận tốc nên không sinh công, động năng hạt được bảo toàn.' }
            ]
        },
        {
            id: 'tu_54',
            context: '<strong>Câu 9. (Tổng hợp: Từ trường và Chụp cộng hưởng từ MRI)</strong><br>Máy chụp MRI trong y tế sử dụng một ống dây siêu dẫn tạo ra từ trường đều khổng lồ (thường từ 1,5 T đến 3,0 T). Bệnh nhân nằm trên cáng và được đẩy vào trong lồng máy.',
            statements: [
                { id: 'a', text: 'Vì sử dụng từ trường tĩnh chứ không dùng tia X (tia bức xạ ion hóa), kĩ thuật chụp MRI an toàn cho tế bào cơ thể hơn so với chụp CT hay X-quang.', isTrue: true, exp: 'Đúng. MRI chỉ dùng từ trường và sóng vô tuyến (RF) năng lượng thấp, không gây ion hóa phá hủy DNA như tia X.' },
                { id: 'b', text: 'Từ trường 3.0T rất mạnh, có thể tác dụng lực từ hút cực mạnh đối với các vật thể có tính sắt từ (như kéo, bình oxy bằng thép, chìa khóa).', isTrue: true, exp: 'Đúng. Lực từ ở mức 1.5T - 3T có thể hút bình oxy bằng thép bay với vận tốc như viên đạn, cực kì nguy hiểm (Hiệu ứng Missile).' },
                { id: 'c', text: 'Bệnh nhân có cấy ghép máy tạo nhịp tim nhân tạo hoặc các mảnh đạn, nẹp vít xương bằng thép hoàn toàn có thể chụp MRI an toàn nếu tắt máy tính toán của phòng chụp.', isTrue: false, exp: 'Sai. Tắt máy tính không vô hiệu hóa được từ trường (nam châm siêu dẫn luôn bật 24/7). Từ trường sẽ hút các đinh vít thép xé rách mô cơ thể, hoặc làm hỏng bộ điện tử của máy tạo nhịp tim. Đây là chống chỉ định tuyệt đối.' },
                { id: 'd', text: 'Quá trình chụp MRI tạo ra tiếng ồn (tiếng gõ) cực kì lớn là do lực Ampere làm rung động mạnh các cuộn dây Gradient mang dòng điện đặt trong từ trường chính.', isTrue: true, exp: 'Đúng. Các cuộn dây chênh từ (Gradient coils) liên tục được cấp dòng xung bật/tắt (hàng nghìn ampe). Lực Ampere ($F = BIL$) liên tục giật các cuộn dây này, đập vào bệ đỡ sinh ra tiếng kêu chát chúa (trên 100 dB).' }
            ]
        },
        {
            id: 'tu_55',
            context: '<strong>Câu 10. (Nguyên lí hoạt động và Cấu tạo máy phát điện)</strong><br>Một máy phát điện xoay chiều một pha loại nhỏ được thiết kế trong phòng thí nghiệm. Lớp vỏ cố định (stato) được gắn một nam châm chữ U vĩnh cửu tạo ra từ trường đều. Cốt trục quay ở tâm (rôto) được quấn một khung dây dẫn hình chữ nhật nối với một hệ thống vành khuyên và chổi quét. Người ta dùng tay quay để làm khung dây quay đều trong từ trường.',
            statements: [
                { id: 'a', text: 'Trong mô hình này, stato đóng vai trò là phần ứng (tạo ra dòng điện), còn rôto đóng vai trò là phần cảm (tạo ra từ trường).', isTrue: false, exp: 'Sai. Phần cảm là bộ phận tạo ra từ trường (ở đây là nam châm cố định - stato). Phần ứng là bộ phận sinh ra dòng điện cảm ứng (ở đây là khung dây quay - rôto). Chức năng của mô hình này ngược lại với các máy phát điện công nghiệp cỡ lớn hiện nay.' },
                { id: 'b', text: 'Hệ thống gồm hai vành khuyên trượt và chổi quét có nhiệm vụ đưa dòng điện xoay chiều từ khung dây đang quay ra mạch ngoài mà không làm xoắn đứt dây dẫn.', isTrue: true, exp: 'Đúng. Khung dây quay liên tục nên không thể nối dây dẫn trực tiếp ra ngoài. Hai vành khuyên (gắn cứng với hai đầu khung dây) trượt liên tục trên hai chổi quét (cố định) giúp duy trì tiếp điểm điện, dẫn dòng điện xoay chiều ra tiêu thụ.' },
                { id: 'c', text: 'Suất điện động cảm ứng trong khung dây đạt độ lớn cực đại tại thời điểm mặt phẳng khung dây vuông góc với các đường sức từ của nam châm.', isTrue: false, exp: 'Sai. Khi mặt phẳng khung dây vuông góc với đường sức từ, từ thông qua khung dây đạt cực đại ($\\Phi_{\\text{max}}$), nhưng tốc độ biến thiên từ thông lại bằng 0. Theo định luật Faraday ($e = -\\Phi\'$), suất điện động lúc này bằng 0. Suất điện động đạt cực đại khi khung dây nằm song song với đường sức từ.' },
                { id: 'd', text: 'Nếu người vận hành quay tay quay với tốc độ nhanh gấp đôi, tần số của dòng điện tạo ra sẽ tăng gấp đôi nhưng biên độ điện áp không thay đổi.', isTrue: false, exp: 'Sai. Tốc độ quay (tần số góc $\\omega$) tăng gấp đôi làm tần số góc và tần số dòng điện $f$ tăng gấp đôi. Đồng thời, biên độ suất điện động $E_0 = \\omega NBS$ tỉ lệ thuận với $\\omega$, nên biên độ cũng sẽ tăng lên gấp đôi.' }
            ]
        },
        {
            id: 'tu_56',
            context: '<strong>Câu 11. (Tính toán thông số máy phát điện)</strong><br>Một máy phát điện mini có stato là một nam châm vĩnh cửu tạo ra từ trường đều có cảm ứng từ $B = 0,2$ T. Rôto là một khung dây dẹt hình chữ nhật gồm $N = 500$ vòng dây, diện tích mỗi vòng là $S = 40$ cm$^2$. Khung dây được động cơ kéo quay đều với tốc độ 3000 vòng/phút quanh một trục cố định nằm trong mặt phẳng khung và vuông góc với các đường sức từ. Lấy $\\pi \\approx 3,14$.',
            statements: [
                { id: 'a', text: 'Tần số của suất điện động xoay chiều do máy phát điện này tạo ra là 50 Hz.', isTrue: true, exp: 'Đúng. Tốc độ quay của rôto là $n = 3000$ vòng/phút $= 50$ vòng/giây. Tần số suất điện động bằng tần số quay của khung dây (do rôto khung dây tương đương máy phát 1 cặp cực): $f = n = 50$ Hz.' },
                { id: 'b', text: 'Từ thông cực đại gửi qua toàn bộ khung dây quay trong từ trường là 0,4 Wb.', isTrue: true, exp: 'Đúng. Diện tích $S = 40$ cm$^2 = 0,004$ m$^2$. Từ thông cực đại qua toàn bộ $N$ vòng dây là: $\\Phi_0 = NBS = 500 \\cdot 0,2 \\cdot 0,004 = 0,4$ Wb.' },
                { id: 'c', text: 'Giá trị hiệu dụng của suất điện động sinh ra ở hai đầu khung dây là khoảng 125,6 V.', isTrue: false, exp: 'Sai. Tần số góc $\\omega = 2\\pi f = 100\\pi$ rad/s. Suất điện động cực đại là $E_0 = \\omega \\Phi_0 = 100\\pi \\cdot 0,4 = 40\\pi \\approx 125,6$ V. Giá trị hiệu dụng phải là $E = \\frac{E_0}{\\sqrt{2}} \\approx \\frac{125,6}{1,414} \\approx 88,8$ V.' },
                { id: 'd', text: 'Tại thời điểm từ thông qua khung dây bằng không, độ lớn suất điện động trong khung dây sẽ đạt giá trị 125,6 V.', isTrue: true, exp: 'Đúng. Biểu thức từ thông và suất điện động vuông pha nhau. Khi từ thông $\\Phi = 0$ (mặt phẳng khung dây song song với đường sức từ) thì suất điện động đạt độ lớn cực đại $E_0 \\approx 125,6$ V.' }
            ]
        },
        {
            id: 'tu_57',
            context: '<strong>Câu 12. (Khảo sát đồ thị dao động kí của máy phát điện mini)</strong><br>Một học sinh chế tạo một máy phát điện xoay chiều loại nhỏ. Phần stato là một nam châm chữ U tạo ra từ trường đều có độ lớn cảm ứng từ $B = 0,1$ T. Phần rôto là một khung dây hình chữ nhật gồm $N = 100$ vòng, diện tích mỗi vòng là $S = 50$ cm$^2$. Học sinh dùng một động cơ điện nhỏ để kéo khung dây quay đều với tốc độ 1200 vòng/phút. Hai đầu khung dây được nối với một dao động kí điện tử (Oscilloscope) để quan sát dạng sóng của suất điện động sinh ra. Lấy $\\pi \\approx 3,14$.',
            statements: [
                { id: 'a', text: 'Trên màn hình dao động kí, tín hiệu điện áp thu được là một đường hình sin có tần số 20 Hz.', isTrue: true, exp: 'Đúng. Tốc độ quay của khung dây là $n = \\frac{1200}{60} = 20$ vòng/giây. Với máy phát điện có 1 cặp cực (nam châm chữ U), tần số dòng điện $f = n = 20$ Hz.' },
                { id: 'b', text: 'Từ thông cực đại gửi qua toàn bộ khung dây trong quá trình quay có giá trị là 0,5 Wb.', isTrue: false, exp: 'Sai. Đổi diện tích $S = 50$ cm$^2 = 0,005$ m$^2$. Từ thông cực đại qua toàn bộ khung dây là: $\\Phi_0 = NBS = 100 \\cdot 0,1 \\cdot 0,005 = 0,05$ Wb. (Phương án cho 0,5 Wb là sai số thập phân).' },
                { id: 'c', text: 'Trên màn hình dao động kí, điện áp đạt giá trị biên độ cực đại (khoảng 6,28 V) tại những thời điểm mặt phẳng khung dây vuông góc với các đường sức từ.', isTrue: false, exp: 'Sai. Tần số góc $\\omega = 2\\pi f = 40\\pi$ rad/s. Biên độ suất điện động là $E_0 = \\omega \\Phi_0 = 40\\pi \\cdot 0,05 = 2\\pi \\approx 6,28$ V. Tuy nhiên, suất điện động đạt cực đại khi tốc độ biến thiên từ thông lớn nhất, điều này xảy ra khi mặt phẳng khung dây nằm song song với các đường sức từ (từ thông lúc này bằng 0). Khi khung dây vuông góc đường sức từ thì suất điện động bằng 0.' },
                { id: 'd', text: 'Từ thông $\\Phi$ qua khung dây và suất điện động cảm ứng $e$ sinh ra trong khung dây luôn biến thiên vuông pha với nhau.', isTrue: true, exp: 'Đúng. Theo định luật Faraday, $e = -\\Phi\'$. Vì $e$ là đạo hàm bậc nhất của $\\Phi$ theo thời gian nên đồ thị của hai đại lượng này luôn lệch pha nhau một góc $\\frac{\\pi}{2}$ (vuông pha).' }
            ]
        },
        {
            id: 'tu_58',
            context: '<strong>Câu 13. (Kết nối mạch ngoài và Định luật Ohm toàn mạch)</strong><br>Một máy phát điện xoay chiều một pha có phần cảm là nam châm vĩnh cửu tạo ra từ trường đều $B = 0,0225$ T. Phần ứng là rôto gồm một khung dây có $N = 500$ vòng, diện tích mỗi vòng $S = 200$ cm$^2$, điện trở trong của khung dây là $r = 2\\text{ }\\Omega$. Khung dây được kéo quay đều với tốc độ 3000 vòng/phút. Nối hai đầu máy phát điện với một điện trở thuần $R = 23\\text{ }\\Omega$ để tạo thành mạch kín. Lấy $\\pi^2 \\approx 10$.',
            statements: [
                { id: 'a', text: 'Suất điện động hiệu dụng do khung dây của máy phát sinh ra xấp xỉ bằng 50 V.', isTrue: true, exp: 'Đúng. $S = 200$ cm$^2 = 0,02$ m$^2$. Tần số góc $\\omega = \\frac{3000}{60} \\cdot 2\\pi = 100\\pi$ rad/s.<br>Suất điện động cực đại: $E_0 = \\omega NBS = 100\\pi \\cdot 500 \\cdot 0,0225 \\cdot 0,02 = 22,5\\pi \\approx 70,68$ V.<br>Suất điện động hiệu dụng: $E = \\frac{E_0}{\\sqrt{2}} = \\frac{22,5\\pi}{\\sqrt{2}} \\approx \\frac{70,68}{1,414} \\approx 50$ V.' },
                { id: 'b', text: 'Cường độ dòng điện hiệu dụng chạy qua điện trở mạch ngoài $R$ là 2,5 A.', isTrue: false, exp: 'Sai. Áp dụng định luật Ohm cho toàn mạch: $I = \\frac{E}{R + r} = \\frac{50}{23 + 2} = \\frac{50}{25} = 2,0$ A.' },
                { id: 'c', text: 'Công suất tỏa nhiệt (công suất tiêu thụ) trên điện trở mạch ngoài $R$ là 92 W.', isTrue: true, exp: 'Đúng. Công suất tỏa nhiệt trên điện trở ngoài: $P_R = I^2 \\cdot R = 2,0^2 \\cdot 23 = 4 \\cdot 23 = 92$ W.' },
                { id: 'd', text: 'Nếu giữ nguyên cấu tạo máy, để điện áp hiệu dụng ở hai đầu điện trở mạch ngoài $R$ tăng lên gấp đôi, người vận hành chỉ cần tăng tốc độ quay của rôto lên mức 6000 vòng/phút.', isTrue: true, exp: 'Đúng. Tốc độ quay tăng gấp đôi ($3000 \\rightarrow 6000$) làm tần số góc $\\omega$ tăng gấp đôi. Suất điện động $E$ tỉ lệ thuận với $\\omega$ nên $E$ tăng gấp đôi. Do điện trở mạch ($R, r$) không đổi vì là thông số cấu tạo, dòng điện $I$ sẽ tăng gấp đôi. Điện áp mạch ngoài $U_R = I \\cdot R$ do đó cũng sẽ tăng chính xác lên gấp đôi.' }
            ]
        }
    ],
    'hat-nhan': [
        {
            id: 'q21',
            context: '<strong>Câu 1. Khảo cổ học (Định tuổi bằng Đồng vị Cacbon-14)</strong><br>Cacbon-14 (${}^{14}_{6}\\text{C}$) là một đồng vị phóng xạ phân rã $\\beta^-$ với chu kì bán rã xấp xỉ 5730 năm. Khi một sinh vật chết đi, nó ngừng hấp thụ C-14 từ môi trường, và lượng C-14 trong cơ thể bắt đầu giảm dần. Một nhà khảo cổ tìm thấy một mảnh gỗ cổ và mang đi đo độ phóng xạ.',
            statements: [
                {
                    id: 'a',
                    text: 'Hạt $\\beta^-$ được phát ra trong quá trình phân rã của C-14 chính là các electron bắn ra từ lớp vỏ nguyên tử của Cacbon.',
                    isTrue: false,
                    exp: 'Sai. Tia $\\beta^-$ là các electron ($e^-$), nhưng chúng được sinh ra từ sự biến đổi bên trong hạt nhân (một nơtron biến thành một proton, một electron và một phản nơtrino), không phải là electron ở lớp vỏ nguyên tử.'
                },
                {
                    id: 'b',
                    text: 'Sau khi trải qua đúng 5730 năm, toàn bộ lượng C-14 trong mảnh gỗ cổ sẽ biến mất hoàn toàn.',
                    isTrue: false,
                    exp: 'Sai. Chu kì bán rã là thời gian để số lượng hạt nhân C-14 giảm đi một nửa. Sau 5730 năm, lượng C-14 còn lại 50%, sau 11460 năm còn 25%... Nó sẽ giảm theo hàm mũ chứ không biến mất hoàn toàn sau một chu kì.'
                },
                {
                    id: 'c',
                    text: 'Nếu tỉ số giữa số hạt C-14 và C-12 trong mảnh gỗ cổ chỉ bằng 25% so với tỉ số đó trong một mẫu gỗ tươi cùng loại, mảnh gỗ cổ này có tuổi thọ khoảng 11460 năm.',
                    isTrue: true,
                    exp: 'Đúng. $25\\% = \\frac{1}{4} = \\left(\\frac{1}{2}\\right)^2$. Lượng C-14 đã trải qua 2 chu kì bán rã. Thời gian là $t = 2T = 2 \\cdot 5730 = 11460$ năm.'
                },
                {
                    id: 'd',
                    text: 'Phương pháp C-14 có thể được sử dụng để định tuổi chính xác cho các bộ xương khủng long hóa thạch cách đây 65 triệu năm.',
                    isTrue: false,
                    exp: 'Sai. 65 triệu năm lớn hơn rất nhiều so với chu kì bán rã 5730 năm của C-14. Sau khoảng 50.000 năm (khoảng 9-10 chu kì bán rã), lượng C-14 còn lại quá ít, không thể đo đạc chính xác bằng các thiết bị hiện tại. Với khủng long, người ta dùng phương pháp định tuổi bằng các đồng vị có chu kì bán rã dài hơn (như U-238).'
                }
            ]
        },
        {
            id: 'q22',
            context: '<strong>Câu 2. Y học hạt nhân (Xạ trị ung thư tuyến giáp bằng I-131)</strong><br>Đồng vị I-ốt 131 (${}^{131}_{53}\\text{I}$) là chất phóng xạ phát ra cả tia $\\beta^-$ và tia $\\gamma$, có chu kì bán rã là 8 ngày. I-131 được sử dụng phổ biến để tiêu diệt các tế bào ung thư tuyến giáp do tuyến này có đặc tính hấp thụ I-ốt rất mạnh.',
            statements: [
                {
                    id: 'a',
                    text: 'Phương trình phân rã $\\beta^-$ của ${}^{131}_{53}\\text{I}$ sẽ tạo ra một hạt nhân con có số khối bằng 131 và số hiệu nguyên tử bằng 54.',
                    isTrue: true,
                    exp: 'Đúng. Phân rã $\\beta^-$ (hạt ${}^{0}_{-1}\\text{e}$), theo định luật bảo toàn: ${}^{131}_{53}\\text{I} \\rightarrow {}^{131}_{54}\\text{Xe} + {}^{0}_{-1}\\text{e}$. Số khối $A = 131$ không đổi, số hiệu nguyên tử $Z$ tăng 1 (thành 54).'
                },
                {
                    id: 'b',
                    text: 'Tia $\\beta^-$ do I-131 phát ra có khả năng đâm xuyên cực mạnh, đi xuyên qua cơ thể người bệnh để phá hủy tế bào ung thư.',
                    isTrue: false,
                    exp: 'Sai. Tia $\\beta^-$ có khả năng đâm xuyên kém (chỉ đi được vài mm trong mô cơ thể). Chính vì nó đâm xuyên kém nên năng lượng của nó giải phóng tại chỗ, tiêu diệt cục bộ tế bào ung thư tuyến giáp mà ít gây hại cho các cơ quan lân cận. Tia $\\gamma$ mới có khả năng đâm xuyên mạnh.'
                },
                {
                    id: 'c',
                    text: 'Sau khi bệnh nhân uống liều phóng xạ I-131, họ cần được cách li với người thân (đặc biệt là trẻ em và phụ nữ có thai) trong một khoảng thời gian.',
                    isTrue: true,
                    exp: 'Đúng. Vì I-131 phát ra cả tia $\\gamma$ có tính đâm xuyên mạnh, cơ thể bệnh nhân lúc này giống như một "nguồn phát bức xạ" di động. Cần cách li để bảo vệ người xung quanh.'
                },
                {
                    id: 'd',
                    text: 'Giả sử bỏ qua sự đào thải sinh học qua đường bài tiết, sau 24 ngày, lượng I-131 trong cơ thể bệnh nhân sẽ giảm xuống còn khoảng 12,5% so với liều lượng ban đầu.',
                    isTrue: true,
                    exp: 'Đúng. Số chu kì bán rã là $k = \\frac{t}{T} = \\frac{24}{8} = 3$. Lượng chất phóng xạ còn lại là $m = m_0 \\cdot \\left(\\frac{1}{2}\\right)^3 = \\frac{m_0}{8} = 12,5\\% \\cdot m_0$.'
                }
            ]
        },
        {
            id: 'q23',
            image: 'bai3_hatnhan.png',
            context: '<strong>Câu 3. Công nghệ Công nghiệp (Đo bề dày vật liệu tự động)</strong><br>Trong một nhà máy cán nhôm, tấm nhôm cuộn di chuyển liên tục giữa một nguồn phóng xạ và một máy đếm Geiger-Muller. Tín hiệu từ máy đếm được đưa về hệ thống máy tính để tự động điều chỉnh khe hở của trục cán, đảm bảo tấm nhôm đạt độ dày chuẩn.',
            statements: [
                {
                    id: 'a',
                    text: 'Nguồn phóng xạ được chọn trong thiết bị này nên là nguồn phát tia Alpha ($\\alpha$) để đảm bảo an toàn cho công nhân.',
                    isTrue: false,
                    exp: 'Sai. Tia $\\alpha$ đâm xuyên cực kì yếu, chỉ cần một tờ giấy mỏng hoặc vài cm không khí đã cản lại được. Nó sẽ bị chặn hoàn toàn bởi tấm nhôm, máy đếm không thể nhận được tín hiệu để phân tích độ dày.'
                },
                {
                    id: 'b',
                    text: 'Nếu tấm nhôm chạy qua trục cán bị lỗi và dày hơn mức cho phép, số đếm ghi nhận được trên máy đo Geiger-Muller sẽ giảm xuống.',
                    isTrue: true,
                    exp: 'Đúng. Vật liệu càng dày thì mức độ hấp thụ tia phóng xạ đâm xuyên (tia $\\beta$ hoặc $\\gamma$) càng lớn. Lượng tia lọt qua đến được máy đếm sẽ giảm đi.'
                },
                {
                    id: 'c',
                    text: 'Hiện tượng phóng xạ của nguồn (phát ra tia đâm xuyên) là một quá trình phụ thuộc rất lớn vào nhiệt độ và áp suất của xưởng cán nhôm.',
                    isTrue: false,
                    exp: 'Sai. Phóng xạ là hiện tượng tự phát bên trong hạt nhân, nó hoàn toàn không phụ thuộc vào các yếu tố vật lý bên ngoài (nhiệt độ, áp suất) hay các liên kết hóa học.'
                },
                {
                    id: 'd',
                    text: 'Nếu nhà máy sử dụng nguồn phát tia $\\beta^-$, các hạt bắn ra đập vào tấm nhôm có bản chất là các chùm phôtôn mang năng lượng cao.',
                    isTrue: false,
                    exp: 'Sai. Tia $\\beta^-$ là chùm các hạt electron (mang điện âm, có khối lượng tĩnh). Chùm phôtôn mang năng lượng cao là bản chất của tia $\\gamma$ hoặc tia X.'
                }
            ]
        },
        {
            id: 'q24',
            image: 'bai4_hatnhan.png',
            context: '<strong>Câu 4. Năng lượng vũ trụ (Pin nhiệt điện phóng xạ RTG)</strong><br>Các tàu vũ trụ bay xa Mặt Trời (như Voyager, Cassini hay robot Curiosity trên sao Hỏa) không thể dùng pin năng lượng mặt trời. Chúng dùng Pin nhiệt điện phóng xạ (RTG). RTG chứa đồng vị Plutonium-238 (${}^{238}_{94}\\text{Pu}$) phân rã $\\alpha$ với chu kì bán rã khoảng 87,7 năm.',
            statements: [
                {
                    id: 'a',
                    text: 'Phương trình phân rã của Plutonium-238 tạo ra hạt nhân con là Uranium-234 (${}^{234}_{92}\\text{U}$).',
                    isTrue: true,
                    exp: 'Đúng. Phân rã $\\alpha$ phát ra hạt nhân Hêli (${}^{4}_{2}\\text{He}$). Theo bảo toàn: ${}^{238}_{94}\\text{Pu} \\rightarrow {}^{4}_{2}\\text{He} + {}^{234}_{92}\\text{U}$.'
                },
                {
                    id: 'b',
                    text: 'Nguyên lí hoạt động của RTG là gom các hạt $\\alpha$ lại để chúng chạy trong mạch điện tạo thành dòng điện trực tiếp.',
                    isTrue: false,
                    exp: 'Sai. Quá trình phân rã $\\alpha$ giải phóng năng lượng dưới dạng động năng của các hạt. Khi các hạt $\\alpha$ va chạm với vỏ bọc, động năng chuyển hóa thành Nhiệt năng. Cặp nhiệt điện (Thermocouple) sẽ chuyển đổi chênh lệch nhiệt độ này thành Điện năng.'
                },
                {
                    id: 'c',
                    text: 'Hằng số phóng xạ $\\lambda$ của Pu-238 có giá trị xấp xỉ $7,9 \\cdot 10^{-3}$ năm$^{-1}$.',
                    isTrue: true,
                    exp: 'Đúng. Công thức $\\lambda = \\frac{\\ln 2}{T} \\approx \\frac{0,693}{87,7} \\approx 0,0079\\text{ năm}^{-1} = 7,9 \\cdot 10^{-3}\\text{ năm}^{-1}$.'
                },
                {
                    id: 'd',
                    text: 'Sau thời gian 87,7 năm bay trong vũ trụ, công suất phát điện của viên pin RTG này sẽ tăng lên gấp đôi do tốc độ bay cực nhanh của tàu vũ trụ.',
                    isTrue: false,
                    exp: 'Sai. Sau 1 chu kì bán rã (87,7 năm), lượng Pu-238 giảm đi một nửa, do đó nhiệt lượng tỏa ra và công suất phát điện của pin RTG sẽ giảm đi một nửa. Tốc độ bay của tàu không làm thay đổi chu kì bán rã (bỏ qua hiệu ứng giãn nở thời gian của thuyết tương đối hẹp vì tốc độ tàu vũ trụ rất nhỏ so với tốc độ ánh sáng).'
                }
            ]
        },
        {
            id: 'q25',
            context: '<strong>Câu 5. Chẩn đoán Y tế (Chụp cắt lớp hình ảnh PET Scan)</strong><br>Trong kĩ thuật PET (Positron Emission Tomography), bệnh nhân được tiêm một hợp chất chứa đồng vị Flo-18 (${}^{18}_{9}\\text{F}$). F-18 phân rã $\\beta^+$ (phát ra hạt positron) với chu kì bán rã 110 phút. Hợp chất này tập trung nhiều ở các tế bào ung thư có mức độ trao đổi chất cao.',
            statements: [
                {
                    id: 'a',
                    text: 'Hạt positron sinh ra trong phân rã $\\beta^+$ có cùng khối lượng với electron nhưng mang điện tích dương ($+e$).',
                    isTrue: true,
                    exp: 'Đúng. Positron (${}^{0}_{1}\\text{e}$) là phản hạt của electron.'
                },
                {
                    id: 'b',
                    text: 'Phương trình phân rã của F-18 sẽ biến đổi hạt nhân Flo thành hạt nhân Oxi (${}^{18}_{8}\\text{O}$).',
                    isTrue: true,
                    exp: 'Đúng. ${}^{18}_{9}\\text{F} \\rightarrow {}^{0}_{1}\\text{e} + {}^{18}_{8}\\text{O}$ cộng thêm hạt nơtrino ($\\nu$).'
                },
                {
                    id: 'c',
                    text: 'Hình ảnh khối u được máy PET chụp lại chính là ảnh của các hạt positron bay thẳng từ khối u đập vào màn hình máy tính.',
                    isTrue: false,
                    exp: 'Sai. Positron đâm xuyên cực kém, nó chỉ bay được vài mm trong cơ thể rồi lập tức va chạm với 1 electron ở mô lân cận. Khi đó xảy ra hiện tượng hủy cặp, biến khối lượng của e và positron thành 2 phôtôn tia $\\gamma$ bay ngược chiều nhau. Máy PET (vòng tròn quanh bệnh nhân) là hệ thống dò tìm các tia $\\gamma$ này để xác định vị trí khối u.'
                },
                {
                    id: 'd',
                    text: 'Do chu kì bán rã của F-18 chỉ là 110 phút, các lọ thuốc phóng xạ này có thể được sản xuất hàng loạt, lưu kho nhiều tháng tại bệnh viện trước khi đem tiêm cho bệnh nhân.',
                    isTrue: false,
                    exp: 'Sai. Với chu kì bán rã quá ngắn (110 phút), F-18 phân rã rất nhanh. Nó không thể lưu kho mà phải được sản xuất bằng máy gia tốc hạt (Cyclotron) ngay tại bệnh viện hoặc khu vực lân cận, và phải sử dụng ngay trong vòng vài giờ.'
                }
            ]
        },
        {
            id: 'q26',
            context: '<strong>Câu 6. Lò phản ứng hạt nhân phân hạch (Nhà máy điện hạt nhân)</strong><br>Một lò phản ứng nước áp lực (PWR) sử dụng nhiên liệu là Uranium-235 (${}^{235}_{92}\\text{U}$) làm giàu thấp.',
            statements: [
                {
                    id: 'a',
                    text: 'Quá trình phân hạch xảy ra khi hạt nhân U-235 hấp thụ một nơtron chuyển động rất nhanh và lập tức vỡ ra thành các mảnh nhẹ hơn.',
                    isTrue: false,
                    exp: 'Sai. U-235 rất khó hấp thụ nơtron nhanh. Quá trình phân hạch hiệu quả xảy ra khi U-235 hấp thụ một nơtron chậm (thermal neutron). Nơtron nhanh sinh ra sau phân hạch phải được làm chậm lại.'
                },
                {
                    id: 'b',
                    text: 'Trong lò phản ứng PWR, nước thông thường (H2O) vừa đóng vai trò là chất làm mát, vừa là chất làm chậm nơtron.',
                    isTrue: true,
                    exp: 'Đúng. Nước làm mát giúp mang nhiệt từ lõi lò đi quay tuabin, đồng thời các phân tử Hydro trong nước giúp hấp thụ động năng của nơtron, biến chúng thành nơtron chậm để duy trì phản ứng dây chuyền.'
                },
                {
                    id: 'c',
                    text: 'Các thanh điều khiển (Control rods) làm bằng hợp kim Boron hoặc Cadmium có tác dụng hấp thụ nơtron thừa để kiểm soát tốc độ của phản ứng dây chuyền.',
                    isTrue: true,
                    exp: 'Đúng. Kéo thanh điều khiển lên, số nơtron tăng, lò hoạt động mạnh. Hạ thanh điều khiển xuống, chúng "ăn" bớt nơtron, tốc độ phản ứng giảm hoặc lò dừng hoạt động.'
                },
                {
                    id: 'd',
                    text: 'Trong một phản ứng phân hạch, tổng khối lượng của các hạt tạo thành sau phản ứng bằng đúng tổng khối lượng của các hạt trước phản ứng.',
                    isTrue: false,
                    exp: 'Sai. Phản ứng phân hạch tỏa năng lượng rất lớn ($E > 0$). Theo hệ thức Einstein $E = \\Delta m c^2$, điều này có nghĩa là đã xảy ra sự hụt khối lượng. Tổng khối lượng sau phản ứng nhỏ hơn tổng khối lượng trước phản ứng.'
                }
            ]
        },
        {
            id: 'q27',
            context: '<strong>Câu 7. Phản ứng nhiệt hạch (Dự án Tokamak / Năng lượng Mặt Trời)</strong><br>Dự án lò phản ứng nhiệt hạch ITER đang cố gắng tổng hợp hai đồng vị của Hydro là Đơteri (D, ${}^{2}_{1}\\text{H}$) và Triti (T, ${}^{3}_{1}\\text{H}$) thành Hêli.',
            statements: [
                {
                    id: 'a',
                    text: 'Phương trình phản ứng nhiệt hạch này là: ${}^{2}_{1}\\text{H} + {}^{3}_{1}\\text{H} \\rightarrow {}^{4}_{2}\\text{He} + {}^{1}_{0}\\text{n} + 17,6\\text{ MeV}$.',
                    isTrue: true,
                    exp: 'Đúng. Phản ứng D-T tạo ra hạt $\\alpha$ (Hêli-4) và giải phóng một nơtron cùng với năng lượng lớn.'
                },
                {
                    id: 'b',
                    text: 'Để hai hạt nhân D và T có thể kết hợp với nhau, chúng cần được đun nóng đến hàng chục triệu độ C nhằm thắng được lực đẩy tĩnh điện giữa chúng.',
                    isTrue: true,
                    exp: 'Đúng. Các hạt nhân đều mang điện tích dương nên chúng đẩy nhau (lực Coulomb). Phải ở nhiệt độ cực kì cao, các hạt nhân mới có động năng nhiệt đủ lớn để va chạm xuyên qua hàng rào thế năng Coulomb và đến gần nhau tới mức lực hạt nhân (lực hút) có thể phát huy tác dụng.'
                },
                {
                    id: 'c',
                    text: 'Năng lượng tỏa ra tính trên một nuclôn của phản ứng nhiệt hạch nhỏ hơn nhiều so với năng lượng tỏa ra tính trên một nuclôn của phản ứng phân hạch Uranium.',
                    isTrue: false,
                    exp: 'Sai. Ngược lại, tính trên cùng một đơn vị khối lượng nhiên liệu (hay tính trên một nuclôn), phản ứng nhiệt hạch tỏa ra năng lượng lớn hơn nhiều so với phản ứng phân hạch. Đây là lí do bom H tàn phá khủng khiếp hơn bom A.'
                },
                {
                    id: 'd',
                    text: 'Nhiên liệu Đơteri (D) là một loại tài nguyên vô cùng khan hiếm, rất khó tìm thấy trên Trái Đất.',
                    isTrue: false,
                    exp: 'Sai. Đơteri có sẵn trong nước biển với tỉ lệ rất dồi dào. Khó khăn của năng lượng nhiệt hạch hiện nay là công nghệ giam giữ khối plasma hàng triệu độ chứ không phải là sự khan hiếm của nhiên liệu Đơteri.'
                }
            ]
        },
        {
            id: 'q28',
            context: '<strong>Câu 8. An toàn bức xạ và Che chắn (Khí Radon trong nhà)</strong><br>Khí Radon-222 (${}^{222}_{86}\\text{Rn}$) là một khí phóng xạ tự nhiên không màu, không mùi, sinh ra từ sự phân rã của Uranium trong đất đá tự nhiên. Nó thường xuyên thấm qua nền móng và đọng lại trong các tầng hầm, gây rủi ro ung thư phổi cao. Radon phân rã $\\alpha$ với chu kì bán rã khoảng 3,8 ngày.',
            statements: [
                {
                    id: 'a',
                    text: 'Khí Radon nguy hiểm chủ yếu là do tia $\\alpha$ phát ra từ nó có khả năng đâm xuyên qua tường nhà và quần áo bảo hộ để đi thẳng vào cơ thể.',
                    isTrue: false,
                    exp: 'Sai. Tia $\\alpha$ đâm xuyên rất yếu, không qua nổi lớp da chết của con người. Sự nguy hiểm của Radon nằm ở chỗ nó là chất khí. Con người hít Radon vào phổi, tại đây chúng phân rã, bắn tia $\\alpha$ trực tiếp vào các mô niêm mạc phổi không được bảo vệ, gây đứt gãy DNA và ung thư.'
                },
                {
                    id: 'b',
                    text: 'Khi một hạt nhân ${}^{222}_{86}\\text{Rn}$ phát ra hạt $\\alpha$, nó sẽ biến thành đồng vị của nguyên tố Poloni (${}^{218}_{84}\\text{Po}$).',
                    isTrue: true,
                    exp: 'Đúng. Phân rã $\\alpha$ (${}^{4}_{2}\\text{He}$), số khối $A$ giảm 4 ($222 - 4 = 218$), số $Z$ giảm 2 ($86 - 2 = 84$). Nguyên tố mang số $Z=84$ là Poloni.'
                },
                {
                    id: 'c',
                    text: 'Vì chu kì bán rã của Radon là 3,8 ngày, nếu ta đóng kín cửa tầng hầm trong khoảng 38 ngày (10 chu kì), khí Radon sẽ biến mất và tầng hầm an toàn vĩnh viễn.',
                    isTrue: false,
                    exp: 'Sai. Khí Radon không phải là một "cục" chất phóng xạ cố định. Nó liên tục được sinh ra và rò rỉ từ các mạch đất đá dưới nền nhà đẩy lên trên. Đóng kín cửa sẽ làm nó tích tụ ngày càng nhiều.'
                },
                {
                    id: 'd',
                    text: 'Biện pháp rẻ và hiệu quả nhất để giảm thiểu rủi ro bức xạ do khí Radon ở các tầng hầm là thiết kế hệ thống quạt thông gió để bơm khí ra ngoài.',
                    isTrue: true,
                    exp: 'Đúng. Thông gió liên tục giúp pha loãng nồng độ Radon trong nhà với không khí sạch bên ngoài, hạ rủi ro bức xạ xuống mức an toàn.'
                }
            ]
        },
        {
            id: 'q29',
            context: '<strong>Câu 9. Ứng dụng Chiếu xạ thực phẩm (Nguồn Co-60)</strong><br>Nhiều quốc gia (trong đó có Việt Nam) sử dụng bức xạ từ đồng vị Cobalt-60 (${}^{60}_{27}\\text{Co}$) để chiếu xạ thực phẩm (thịt, trái cây tươi), diệt khuẩn, trứng côn trùng nhằm kéo dài thời gian bảo quản và đáp ứng tiêu chuẩn xuất khẩu.',
            statements: [
                {
                    id: 'a',
                    text: 'Bức xạ chủ yếu được sử dụng trong hệ thống chiếu xạ này là tia $\\gamma$ (gamma) vì nó có năng lượng cao và khả năng đâm xuyên sâu vào giữa các thùng hàng.',
                    isTrue: true,
                    exp: 'Đúng. Tia $\\gamma$ (sóng điện từ bước sóng cực ngắn) có khả năng đâm xuyên cực mạnh, giúp diệt khuẩn tới tận tâm của thùng hoa quả mà không cần tháo bao bì.'
                },
                {
                    id: 'b',
                    text: 'Phân rã của Co-60 sẽ biến đổi hạt nhân Co thành một đồng vị khác (Niken) chứ không phải giữ nguyên là Cobalt.',
                    isTrue: true,
                    exp: 'Đúng. Thực tế, Co-60 phân rã $\\beta^-$ thành ${}^{60}_{28}\\text{Ni}$ ở trạng thái kích thích, sau đó Niken mới chuyển về trạng thái cơ bản và phát ra các phôtôn tia $\\gamma$.'
                },
                {
                    id: 'c',
                    text: 'Quả thanh long sau khi chạy qua buồng chiếu xạ tia $\\gamma$ sẽ bị nhiễm phóng xạ và người tiêu dùng khi ăn vào sẽ bị ảnh hưởng.',
                    isTrue: false,
                    exp: 'Sai. Chiếu xạ bằng tia $\\gamma$ giống như việc chiếu ánh sáng qua một lớp kính. Năng lượng của bức xạ tiêu diệt DNA của vi khuẩn nhưng không làm vật liệu được chiếu xạ biến thành chất phóng xạ. Thực phẩm hoàn toàn an toàn.'
                },
                {
                    id: 'd',
                    text: 'Nguồn Co-60 khi không sử dụng (đang lưu kho) thường được dìm sâu xuống một bể nước khổng lồ để che chắn bức xạ an toàn cho công nhân.',
                    isTrue: true,
                    exp: 'Đúng. Bể nước sâu (vài mét) là vật liệu che chắn tia $\\gamma$ rất tuyệt vời, trong suốt (dễ quan sát), rẻ tiền, đồng thời giúp hấp thụ một lượng nhiệt tỏa ra từ khối phóng xạ.'
                }
            ]
        },
        {
            id: 'q30',
            image: 'bai10_hatnhan.png',
            context: '<strong>Câu 10. Thiết bị báo cháy (Ion hóa khói bằng Am-241)</strong><br>Nhiều máy báo cháy gắn trần nhà sử dụng một lượng rất nhỏ đồng vị Americi-241 (${}^{241}_{95}\\text{Am}$). Am-241 phát ra hạt $\\alpha$. Bên trong thiết bị có một buồng ion hóa gồm hai bản điện cực.',
            statements: [
                {
                    id: 'a',
                    text: 'Các hạt $\\alpha$ phát ra đập vào các phân tử không khí trong buồng, làm bật electron ra ngoài, biến không khí thành môi trường dẫn điện.',
                    isTrue: true,
                    exp: 'Đúng. Tia $\\alpha$ có khả năng ion hóa chất khí rất mạnh. Sự ion hóa này tạo ra các electron tự do và ion dương, giúp một dòng điện nhỏ luôn chạy qua buồng mạch.'
                },
                {
                    id: 'b',
                    text: 'Khi có cháy, các hạt khói lớn lọt vào buồng sẽ bị các ion bám vào, làm chúng chuyển động chậm lại và kết quả là làm cường độ dòng điện tăng vọt.',
                    isTrue: false,
                    exp: 'Sai. Khi khói lọt vào, các ion và electron nhẹ bám vào các hạt khói cồng kềnh. Khối lượng tăng làm các điện tích chuyển động chật vật hơn giữa hai bản cực, dẫn đến dòng điện bị giảm đột ngột. Mạch cảm biến nhận thấy dòng điện sụt giảm liền kích hoạt chuông báo cháy.'
                },
                {
                    id: 'c',
                    text: 'Lượng Am-241 trong máy báo cháy rất nhỏ và phát ra tia $\\alpha$ yếu, nên nó hoàn toàn vô hại với người sống trong nhà khi thiết bị được treo trên trần.',
                    isTrue: true,
                    exp: 'Đúng. Vỏ nhựa của thiết bị và vài cm không khí đã hấp thụ toàn bộ tia $\\alpha$. Rủi ro bức xạ ngoại chiếu là hoàn toàn không có (trừ khi cố tình tháo thiết bị ra và nuốt viên phóng xạ vào bụng).'
                },
                {
                    id: 'd',
                    text: 'Am-241 được tạo ra bằng cách bắn phá nơtron vào Plutonium trong các lò phản ứng hạt nhân, đây là một ví dụ về hiện tượng phóng xạ nhân tạo.',
                    isTrue: true,
                    exp: 'Đúng. Am không tồn tại tự nhiên trên Trái Đất. Đồng vị Am-241 là sản phẩm của các chuỗi phản ứng hấp thụ nơtron và phân rã $\\beta$ bắt nguồn từ Pu-239 trong các lò hạt nhân, gọi là đồng vị phóng xạ nhân tạo.'
                }
            ]
        }
    ]
};
// Hàm tự động quét và sửa lỗi không khớp giữa isTrue và lời giải thích (exp)
function fixMismatchedExplanations(data) {
    let fixCount = 0;
    
    // Duyệt qua từng chủ đề (ví dụ: 'nhiet', 'khili-tuong', 'tu-truong',...)
    for (const category in data) {
        data[category].forEach((question) => {
            if (question.statements) {
                // Duyệt qua các ý (statements) trong mỗi câu hỏi
                question.statements.forEach((statement) => {
                    const expText = statement.exp.trim();
                    
                    // Trường hợp 1: Lời giải thích là "Đúng" nhưng isTrue đang bị cấu hình là false
                    if (expText.startsWith('Đúng') && statement.isTrue === false) {
                        statement.isTrue = true;
                        console.log(`[Đã sửa] Câu ${question.id} - Ý ${statement.id}: Cập nhật isTrue = true`);
                        fixCount++;
                    } 
                    // Trường hợp 2: Lời giải thích là "Sai" nhưng isTrue đang bị cấu hình là true
                    else if (expText.startsWith('Sai') && statement.isTrue === true) {
                        statement.isTrue = false;
                        console.log(`[Đã sửa] Câu ${question.id} - Ý ${statement.id}: Cập nhật isTrue = false`);
                        fixCount++;
                    }
                });
            }
        });
    }
    
    console.log(`\n✅ Hoàn tất! Đã sửa tổng cộng ${fixCount} lỗi không khớp.`);
    // Không cần return data cũng được vì data bị sửa trực tiếp
}

// Chạy hàm để chuẩn hóa lại dữ liệu (BỎ GÁN LẠI, CHỈ CẦN GỌI HÀM NHƯ SAU:)
fixMismatchedExplanations(practiceData);