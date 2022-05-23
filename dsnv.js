function DanhSachNhanVien(){
    this.arr = [];

    this.themNV = function (nv){
        this.arr.push(nv);
    };

    this.timViTriNV = function(taiKhoanNV){
         var index = -1;
         this.arr.forEach(function (item, i) {
             if (item.taiKhoanNV === taiKhoanNV) {
                 index = i;
             }
         });
         
         return index;
    }

    this.xoaNV = function(taiKhoanNV){
        var index = this.timViTriNV(taiKhoanNV);
        if(index !== -1) {
            this.arr.splice(index, 1);
        }
    };

    this.suaNV = function(taiKhoanNV){
        var index = this.timViTriNV(taiKhoanNV);
        if (index !== -1) {
            return this.arr[index];
        }
        return null;
    };

    this.capNhat = function(nv){
        var index = this.timViTriNV(nv.taiKhoanNV);
        if (index !== -1) {
            this.arr[index] = nv;
        }
    };

    this.timKiemNV = function(searchName){
        /**
         * 0. Tạo mangTimKiem = []
         * 1. Duyệt mảng arr
         * 2. Nếu item.tenSV trùng với keyword
         * => thêm sv được tìm thấy vào mangTimKiem
         * 3. Trả về mangTimKiem
         */
        var mangTimKiem = [];

        this.arr.forEach(function(item){
            if (item.tenNV.toLowerCase().indexOf(searchName.toLowerCase()) > -1){
                mangTimKiem.push(item);
            }
        });

        return mangTimKiem;
    };
}