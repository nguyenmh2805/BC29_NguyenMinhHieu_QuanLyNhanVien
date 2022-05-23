var dsnv = new DanhSachNhanVien();
var validation = new Validation();

getLocalStorage();

function getEle(id){
    return document.getElementById(id);
}

function layThongTinNV(){
    //Dom tới các thẻ input lấy value
    var _taiKhoanNV = getEle('tknv').value;
    var _tenNV = getEle('name').value;
    var _email = getEle('email').value;
    var _matKhau = getEle('password').value;
    var _ngayLam = getEle('datepicker').value;
    var _luongCoBan = getEle('luongCB').value;
    var _chucVu = getEle('chucvu').value;
    var _gioLam = getEle('gioLam').value;

    //flag (cờ) - isValid là true thì hợp lệ, false thì ngược lại
    var isValid = true;

    //Check validation
    isValid = validation.kiemTraRong(_taiKhoanNV, 
    "errorTaiKhoanNV",
    "(*) Vui lòng nhập tài khoản NV");

    isValid = validation.kiemTraRong(_tenNV, 
    "tbTen",
    "(*) Vui lòng nhập tên NV");

    isValid = validation.kiemTraRong(_tenNV, 
     "tbEmail",
    "(*) Vui lòng nhập email");

    isValid = validation.kiemTraRong(_tenNV, 
    "tbMatKhau",
    "(*) Vui lòng nhập mật khẩu");

    isValid = validation.kiemTraRong(_tenNV, 
    "tbNgay",
    "(*) Vui lòng nhập ngày");

    isValid = validation.kiemTraRong(_tenNV, 
    "tbLuongCB",
    "(*) Vui lòng nhập lương");

    isValid = validation.kiemTraRong(_tenNV, 
    "tbChucVu",
    "(*) Vui lòng nhập chức vụ");

    isValid = validation.kiemTraRong(_tenNV, 
    "tbGiolam",
    "(*) Vui lòng nhập giờ làm");


    //check isValid
    if (!isValid) return;
    
    //Tạo đối tượng sinhVien từ lớp đối tượng SinhVien
    var nhanVien = new NhanVien(_taiKhoanNV, _tenNV, _email, _matKhau, _ngayLam, _luongCoBan, _chucVu, _gioLam);

    //tính DTB
    nhanVien.tinhTongLuong();

    //tính xếp loại
    nhanVien.tinhXepLoai();

    return nhanVien;
}

/**
 * Thêm nhân viên
 */
getEle('btnThemNV').onclick = function (){
    var nhanVien = layThongTinNV();
    if(nhanVien){
    dsnv.themNV(nhanVien);
    taoBang(dsnv.arr);
    setLocalStorage();
    }
}

function taoBang(data) {
    var content = "";
    data.forEach(function(item, index){
        content += `
            <tr>
                <td>${item.taiKhoanNV}</td>
                <td>${item.tenNV}</td>
                <td>${item.email}</td>
                <td>${item.ngayLam}</td>
                <td>${item.chucVu}</td>
                <td>${item.tongLuong}</td>
                <td>${item.xepLoai}</td>
                <td>
                    <button class="btn btn-info" data-toggle="modal"
                    data-target="#myModal" onclick="suaNV('${item.taiKhoanNV}')">Sửa</button>
                    <button class="btn btn-danger"  onclick="xoaNV('${item.taiKhoanNV}')">Xóa</button>
                </td>
            </tr>
        `;
    });
    getEle('tableDanhSach').innerHTML = content;
}

/**
 * Xóa NV
 */
 function xoaNV (id){
    dsnv.xoaNV(id);
    taoBang(dsnv.arr);
    setLocalStorage();
}

/**
 * Sửa SV
 */
 function suaNV (id){
    var nv = dsnv.suaNV(id);
    if (nv) {
        //Dom tới các thẻ input và show value từ sv
        getEle('tknv').value =nv.taiKhoanNV;
        getEle('name').value =nv.tenNV;
        getEle('email').value =nv.email;
        getEle('password').value =nv.matKhau;
        getEle('datepicker').value =nv.ngayLam;
        getEle('luongCB').value =nv.luongCoBan;
        getEle('chucvu').value =nv.chucVu;
        getEle('gioLam').value =nv.gioLam;
    }
}
 
/**
 * Cập nhật
 */
 getEle('btnCapNhat').onclick = function (){
    var nhanVien = layThongTinNV();
    dsnv.capNhat(nhanVien);
    taoBang(dsnv.arr);
    setLocalStorage();
}

/**
 *Tìm kiếm NV
 */
 getEle('searchName').addEventListener('keyup', function(){
    var searchName = getEle('searchName').value;
    var mangTimKiem = dsnv.timKiemNV(searchName);
    taoBang(mangTimKiem);
});

function setLocalStorage() {
    //Convert from JSON to String
    var dataString = JSON.stringify(dsnv.arr);
    //Lưu xuống localStorage
    localStorage.setItem('DSNV', dataString);
}

function getLocalStorage(){
    if (localStorage.getItem('DSNV')) {
   var dataString = localStorage.getItem('DSNV'); 
   //Convert from String to JSON
   var dataJson = JSON.parse(dataString);
   dsnv.arr = dataJson;
   taoBang(dsnv.arr);
    }
}
