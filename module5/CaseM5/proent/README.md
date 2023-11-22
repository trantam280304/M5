0. ReactJS là thư viện JavaScript được sử dụng để xây dựng các thành phần UI có thể tái sử dụng.
ReactJS được phát triển bởi Facebook, thường được sử dụng để phát triển ứng dụng single-page, di động, server-side render.
ReactJS trừu tượng hóa DOM, cung cấp một mô hình lập trình đơn giản hơn và hiệu suất tốt hơn.

1.  Hook useEffect dùng để làm gì?.
sử dụng để thực hiện các side effects trong các functional components. Side effects là những tác vụ không thuộc quyền quản lý state hoặc UI rendering, như gọi API, đăng ký và hủy đăng ký sự kiện, thao tác với các biến toàn cục, và những tác vụ tương tự.

2. Props là gì?
props (tên đầy đủ là "properties") được sử dụng để truyền dữ liệu từ một component cha xuống một component con. Props là một cách để truyền thông tin giữa các component và làm cho các component tái sử dụng và linh hoạt hơn.

3. Vòng đời component ?
Init->Mounting-> Updating(cập nhật)-> Unmounting (Hủy)
 

4. Các thành phần trong Redux
Actions (Hành động)-> Reducers (Reducer)-> Store (Kho chứa)

5. Impure Function là gì?
 là một hàm không thuần khiết. Hàm này đã sử dụng tới một biến từ bên ngoài. và một hàm thuần khiết không được phụ thuộc vào bất cứ input nào khác ngoài các tham số được truyền vào.

20. Pure function là gì?
Hàm luôn trả về cùng một kết quả nếu được truyền vào các tham số không đổi. Nó không hề phụ thuộc vào bất kỳ trạng thái hoặc dữ liệu nào, cũng như những sự thay đổi trong khi chương trình đang được chạy. Nó chỉ phụ thuộc vào các tham số đầu vào của nó.


6. Lý do sử dụng JSX
•	Thứ nhất, JSX với cú pháp gần giống XML, cấu trúc cây khi biểu thị các attributes, điều đó giúp ta dễ dàng định nghĩa, quản lý được các component phức tạp, thay vì việc phải định nghĩa và gọi ra nhiều hàm hoặc object trong javascript. Khi nhìn vào cấu trúc đó cũng dễ dàng đọc hiểu được ý nghĩa của các component. Code JSX ngắn hơn, dễ hiểu hơn code JS.
•	Thứ 2, JSX không làm thay đổi ngữ nghĩa của Javascript
•	Thứ 3, với cách viết gần với các thẻ HTML, nó giúp những developers thông thường (ví dụ như các designer) có thể hiểu được một cách dễ dàng, từ đó có thể viết hoặc sửa code mà không gặp nhiều khó khăn.


7.Next js là gì?
Next.js là một framework phổ biến dựa trên React được sử dụng để xây dựng các ứng dụng web hiệu quả và dễ bảo trì.

8. React là gì?
React là một thư viện JavaScript phổ biến được phát triển bởi Facebook, được sử dụng để xây dựng giao diện người dùng (UI) hiệu quả trong các ứng dụng web.

9. So sánh npm,npx, yarn

-	Công cụ quản lý thư viện, cho phép người dùng quản lý package…
NPM                  	                NPX	                                                                YARN
Công cụ mặc định	                 Là công cụ đi kèm với NPM	                                 Công cụ thay thế cho npm
Cài đặt kèm theo node.js	          Thực thi mà ko cần cài đặt	                         Thực thi cần cài đặt
Tốc độ chậm	Chậm trong một              số trường hợp	                                      Tốc độ tải nhanh

10. So sánh --save và --save-dev
•	–save-dev thêm gói của bên thứ ba vào các phụ thuộc phát triển của gói (package’s development dependencies). Nó sẽ không được cài đặt khi ai đó chạy npm install trực tiếp để cài đặt gói của bạn. Nó thường chỉ được cài đặt nếu ai đó sao chép kho lưu trữ nguồn của bạn trước và sau đó chạy cài đặt npm trong đó.
•	–save thêm gói của bên thứ ba vào các gói phụ thuộc của gói. Nó sẽ được cài đặt cùng với gói bất cứ khi nào ai đó chạy gói cài đặt npm.

12. React Components là gì ?
Components (thành phần) là các khối xây dựng giao diện người dùng (UI) được tái sử dụng, độc lập và có khả năng tự quản lý state và lifecycle.
13. PreventDefault dùng làm gì ?
Phương thức preventDefault() của đối tượng event được sử dụng để ngăn chặn cách xử lý mặc định của trình duyệt khi xảy ra sự kiện. đồng thời ngăn cản trình duyệt chuyển tiếp người dùng tới trang đích của link liên kết.

14. Observable side effects là gì?
Observable side effect là bất kỳ sự tương tác nào với bên ngoài từ bên trong hàm ví dụ như việc thay đổi giá trị biến ở bên ngoài hàm hay gọi hàm khác từ bên trong hàm (trừ khi hàm được gọi cũng pure).

15. Redux là gì ?
Redux là một thư viện quản lý trạng thái (state management)
16. Có mấy cách dùng useEffect ?

Có 2 cách chính:
•	effect không cần cleanup
•	effect cần cleanup
16. Cách hoạt động của RESTful API
REST hoạt động chủ yếu dựa vào các giao thức HTTP:
•	GET (SELECT): Trả về một Resource hoặc một danh sách Resource.
•	POST (CREATE): Tạo mới một Resource.
•	PUT (UPDATE): Cập nhật thông tin cho Resource.
•	DELETE (DELETE): Xoá một Resource.
Những phương thức hay hoạt động này thường được gọi là CRUD tương ứng với Create, Read, Update, Delete 
RESTful API không sử dụng session và cookie, nó sử dụng một access_token với mỗi request
•	200 OK – Trả về thành công cho những phương thức GET, PUT, PATCH hoặc DELETE.
•	201 Created – Trả về khi một Resource vừa được tạo thành công.
•	204 No Content – Trả về khi Resource xoá thành công.
•	304 Not Modified – Client có thể sử dụng dữ liệu cache.
•	400 Bad Request – Request không hợp lệ
•	401 Unauthorized – Request cần có auth.
•	403 Forbidden – bị từ chối không cho phép.
•	404 Not Found – Không tìm thấy resource từ URI
•	405 Method Not Allowed – Phương thức không cho phép với user hiện tại.
•	410 Gone – Resource không còn tồn tại, Version cũ đã không còn hỗ trợ.
•	415 Unsupported Media Type – Không hỗ trợ kiểu Resource này.
•	422 Unprocessable Entity – Dữ liệu không được xác thực
•	429 Too Many Requests – Request bị từ chối do bị giới hạn



17.Ưu điểm của React
•	Bạn hoàn toàn có thể sử dụng ReactJS để viết ứng dụng trực tiếp bằng JavaScript.
•	Biến các thành phần UI phức tạp trở thành những component độc lập.
•	Chuyển các dữ liệu đã được tùy biến đến một UI component cụ thể.
•	Giúp bạn có thể thay đổi trạng thái cho nhiều component con và không gây ảnh hưởng đến component gốc.
•	Khả năng xác định chính xác khi nào cần render lại cũng như khi nào bỏ đi phần tử DOM.

18.Nhược điểm của React
•	Reactjs chỉ phục vụ cho tầng View. React chỉ là View Library nó không phải là một MVC framework như những framework khác. Đây chỉ là thư viện của Facebook giúp render ra phần view. Vì thế React sẽ không có phần Model và Controller, mà phải kết hợp với các thư viện khác. React cũng sẽ không có 2-way binding hay là Ajax
•	Tích hợp Reactjs vào các framework MVC truyền thống yêu cầu cần phải cấu hình lại.
•	React khá nặng nếu so với các framework khác React có kích thước tương tương với Angular (Khoảng 35kb so với 39kb của Angular). Trong khi đó Angular là một framework hoàn chỉnh
•	Khó tiếp cận cho người mới học Web
19. Các loại Components và cú pháp ?
Có hai loại là function component và class component

20. Ưu điểm của RESTful API
Cho phép tổ chức các ứng dụng phức tạp, dễ dàng sử dụng tài nguyên. Quản lý tải cao nhờ HTTP proxy server và cache. Các client mới có thể dễ dàng làm việc trên những ứng dụng khác. Cho phép sử dụng các lệnh gọi thủ tục HTTP tiêu chuẩn để truy xuất dữ liệu và request.


22. JSX là gì
JSX = Javascript + XML
•	JSX là viết tắt của JavaScript XML.
•	JSX là một ngôn ngữ cho phép bạn kết hợp JavaScript và các thẻ giống HTML để xác định các phần tử giao diện người dùng (UI) và chức năng của chúng.
•	JSX là một phần mở rộng cho JavaScript cho phép viết những gì trông giống như HTML và XML trong JavaScript.
•	JSX là cách viết tắt để gọi React.createElement () để tạo các phần tử và thành phần (Babel biên dịch JSX thành những câu gọi hàm React.createElement()).
•	JSX trông giống như HTML và cung cấp một cú pháp thân thiện để tạo các phần tử DOM.
•	JSX chấp nhận bất kỳ biểu thức JavaScript hợp lệ nào bên trong dấu ngoặc nhọn.
23. SEO là gì ?
Tối ưu hóa công cụ tìm kiếm (SEO) là quá trình tăng chất lượng và lưu lượng tTối ưu hóa công cụ tìm kiếm (SEO) là quá trình tăng chất lượng và lưu lượng truy cập website bằng cách tối ưu tệp trích xuất HTML, cấu trúc website thân thiện với các công cụ truy tìm dữ liệu như Google, Bing, Yahoo,
24.Tính năng của react?
•	JSX – JSX là phần mở rộng cú pháp JavaScript. Không nhất thiết phải sử dụng JSX trong phát triển React, nhưng nó được khuyến khích.
•	Component – Làm việc với React là làm việc với các Component. Bạn cần tư duy mọi thứ theo hướng component. Component sẽ giúp bạn dễ dàng chỉnh sửa, phát triển khi làm việc trên các dự án quy mô lớn.
•	One-way và Flux – React triển khai luồng dữ liệu một chiều giúp bạn dễ dàng suy luận về ứng dụng của mình. Flux là một mẫu giúp giữ dữ liệu của bạn theo một phương hướng duy nhất
25.MPA là gì?
MPA (Multiple Page Application) là một kiểu ứng dụng web mà mỗi trang trong ứng dụng tương ứng với một trang HTML riêng biệt. Trong mô hình này, khi người dùng thực hiện điều hướng hoặc thao tác trên trang, trình duyệt sẽ tải lại toàn bộ trang mới từ máy chủ.



26.SPA là gì?
 là một ứng dụng web hay một website mà ở đó tất cả các thao tác của người dùng chỉ diễn ra trên 1 trang duy nhất, tất cả các cấu trúc của trang web (HTML) được load sẵn 1 lần và sẽ không load lại ngay cả khi chuyển trang.
 
27. So sánh SPA và MPA

SPA	MPA
Ứng dụng chạy trên 1 trang	Ứng dụng chạy trên nhiều trang
Load 1 phần	Load toàn bộ
Nhanh hơn	Chậm hơn

ch tối ưu tệp trích xuất HTML, cấu trúc website thân thiện với các công cụ truy tìm dữ liệu như Google, Bing, Yahoo,…

28. React element là gi?
React Element là những gì được trả lại từ các component. Đó là một đối tượng hầu như mô tả các DOM nodes mà một thành phần đại diện. Với function component, element này là đối tượng mà hàm trả về. Với class component, Element là đối tượng mà hàm trả về của function returns.
ối ưu
29.Toolchain là gì ?
là một tập hợp các công cụ phần mềm và quy trình mà một nhóm phát triển sử dụng để xây dựng, kiểm thử, và triển khai phần mềm.

30.Một số toolchain phổ biến
Npm/yan/docker/bable/webpack….

31.Babel là gì
Babel là một công cụ biên dịch mã nguồn JavaScript. Nó được sử dụng để chuyển đổi mã nguồn JavaScript mới, sử dụng các tính năng của phiên bản ECMAScript hiện đại, thành mã nguồn JavaScript tương thích với các phiên bản trình duyệt và môi trường thấp hơn.

21. Webpack là gì?
Webpack là một công cụ đóng gói (bundling) và xây dựng (building) cho ứng dụng web

34.Hook useState dùng làm gì ?
useState là một Hook trong React để giúp các functional component (component không có state hoặc lifecycle methods trước đây) có khả năng sử dụng trạng thái (state)

35.CSR & SSR: Khái niệm và so sánh
1. CSR (Client-Side Rendering):
•	Khái Niệm: Trong CSR, toàn bộ quá trình xây dựng và hiển thị trang web xảy ra ở phía máy khách (trình duyệt). Ban đầu, chỉ có HTML cơ bản và một số tập tin JavaScript được tải về từ máy chủ. Sau đó, JavaScript sẽ thực hiện yêu cầu để tải dữ liệu và xây dựng giao diện người dùng.
•	Ưu Điểm:
•	Tải Nhanh Ban Đầu: Trang web có thể tải nhanh ban đầu do chỉ cần tải một lượng nhỏ mã nguồn HTML và JavaScript ban đầu.
•	Tính Năng Động: Cho phép xây dựng giao diện người dùng động dựa trên dữ liệu.
•	Nhược Điểm:
•	SEO Khó Khăn: Tìm kiếm không hiểu được nội dung được tạo ra bằng JavaScript, điều này có thể ảnh hưởng đến SEO.
•	Hiệu Suất Trên Máy Khách: Có thể yêu cầu nhiều tài nguyên và xử lý tại máy khách, ảnh hưởng đến hiệu suất trên các thiết bị có cấu hình yếu.
2. SSR (Server-Side Rendering):
•	Khái Niệm: Trong SSR, quá trình xây dựng trang web xảy ra tại máy chủ. Máy chủ gửi đến máy khách một trang HTML hoàn chỉnh chứa nội dung và dữ liệu cần thiết. Máy khách nhận được một trang đã được render đầy đủ và có thể hiển thị ngay lập tức.
•	Ưu Điểm:
•	SEO Tốt: Các công cụ tìm kiếm dễ dàng đọc và đánh giá nội dung, vì dữ liệu đã được render trước khi được gửi đến máy khách.
•	Hiệu Suất Ban Đầu Tốt: Người dùng sẽ nhận được trang có thể hiển thị ngay lập tức mà không cần chờ JavaScript tải và thực thi.
•	Nhược Điểm:
•	Tải Chậm Ban Đầu: Trang web cần phải đợi cho đến khi máy chủ hoàn thành quá trình xử lý và render trước khi gửi về máy khách.

CSR (Client-Side Rendering) và SSR (Server-Side Rendering) là hai chiến lược khác nhau trong việc xử lý và hiển thị nội dung trên web. Dưới đây là khái niệm và một số so sánh giữa chúng:
1. CSR (Client-Side Rendering):
•	Khái Niệm: Trong CSR, toàn bộ quá trình xây dựng và hiển thị trang web xảy ra ở phía máy khách (trình duyệt). Ban đầu, chỉ có HTML cơ bản và một số tập tin JavaScript được tải về từ máy chủ. Sau đó, JavaScript sẽ thực hiện yêu cầu để tải dữ liệu và xây dựng giao diện người dùng.
•	Ưu Điểm:
•	Tải Nhanh Ban Đầu: Trang web có thể tải nhanh ban đầu do chỉ cần tải một lượng nhỏ mã nguồn HTML và JavaScript ban đầu.
•	Tính Năng Động: Cho phép xây dựng giao diện người dùng động dựa trên dữ liệu.
•	Nhược Điểm:
•	SEO Khó Khăn: Tìm kiếm không hiểu được nội dung được tạo ra bằng JavaScript, điều này có thể ảnh hưởng đến SEO.
•	Hiệu Suất Trên Máy Khách: Có thể yêu cầu nhiều tài nguyên và xử lý tại máy khách, ảnh hưởng đến hiệu suất trên các thiết bị có cấu hình yếu.
2. SSR (Server-Side Rendering):
•	Khái Niệm: Trong SSR, quá trình xây dựng trang web xảy ra tại máy chủ. Máy chủ gửi đến máy khách một trang HTML hoàn chỉnh chứa nội dung và dữ liệu cần thiết. Máy khách nhận được một trang đã được render đầy đủ và có thể hiển thị ngay lập tức.
•	Ưu Điểm:
•	SEO Tốt: Các công cụ tìm kiếm dễ dàng đọc và đánh giá nội dung, vì dữ liệu đã được render trước khi được gửi đến máy khách.
•	Hiệu Suất Ban Đầu Tốt: Người dùng sẽ nhận được trang có thể hiển thị ngay lập tức mà không cần chờ JavaScript tải và thực thi.
•	Nhược Điểm:
•	Tải Chậm Ban Đầu: Trang web cần phải đợi cho đến khi máy chủ hoàn thành quá trình xử lý và render trước khi gửi về máy khách.
3. So Sánh:
•	SEO:
•	CSR: Có thể gặp khó khăn vì công cụ tìm kiếm cần đợi JavaScript thực thi để đọc nội dung.
•	SSR: Tốt cho SEO vì nội dung đã được render tại máy chủ và gửi đến máy khách dưới dạng HTML.
•	Hiệu Suất Ban Đầu:
•	CSR: Có thể tải nhanh ban đầu do chỉ cần tải một lượng nhỏ mã HTML và JavaScript.
•	SSR: Hiệu suất ban đầu tốt vì trang đã được render trước khi đến tay máy khách.
•	Phức Tạp Điều Khiển:
•	CSR: Có thể dễ kiểm soát hơn trong các ứng dụng động và phức tạp.
•	SSR: Có thể tốn nhiều công sức hơn trong việc quản lý và triển khai, đặc biệt đối với ứng dụng lớn.


36.API là gì ?
API là viết tắt của Application Programming Interface (giao diện lập trình ứng dụng)

kiếm (SEO) là quá trình tăng chất lượng và lưu lượng truy cập website bằng cách tối ưu tệp trích xuất HTML, cấu trúc website thân thiện với các công cụ truy tìm dữ liệu như Google, Bing, Yahoo,…
ối ưu hóa công cụ tìm kiếm (SEO) là quá trình tăng chất lượng và lưu lượng truy cập website bằng cách tối ưu tệp trích xuất HTML, cấu trúc website thân thiện với các công cụ truy tìm dữ liệu như Google, Bing, Yahoo,…