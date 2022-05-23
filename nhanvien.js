function NhanVien (
    _taiKhoanNV,
    _tenNV,
    _email,
    _matKhau,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLam
){
    this.taiKhoanNV = _taiKhoanNV;
    this.tenNV = _tenNV;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCoBan = _luongCoBan;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.tongLuong = 0;
    this.xepLoai = "";

    this.tinhTongLuong = function(){
        if(this.chucVu === 'Sếp'){
            this.tongLuong = this.luongCoBan * 3
        } else if (this.chucVu === 'Trưởng phòng') {
            this.tongLuong = this.luongCoBan * 2
        } else if (this.chucVu === 'Nhân viên') {
            this.tongLuong = this.luongCoBan * 1
        }
    }

    this.tinhXepLoai = function(){
        if (this.gioLam >= 192) {
            this.xepLoai = 'Xuất sắc';
          } else if (176 <= this.gioLam && this.gioLam < 192) {
            this.xepLoai = 'Giỏi';
          } else if (160 <= this.gioLam && this.gioLam < 176) {
            this.xepLoai = 'Khá';
          } else {
            this.xepLoai = 'Trung bình';
          }
    }
}