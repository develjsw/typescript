var tempComplexData = [
    {
        complexCode: 1000,
        complexDongCode: 1111,
        complexHoCode: 2222,
        complexLandCode: 12.51
    },
    {
        complexCode: 1000,
        complexDongCode: 1111,
        complexHoCode: 3333,
        complexLandCode: 34.56
    },
    {
        complexCode: 2000,
        complexDongCode: 1111,
        complexHoCode: 4444,
        complexLandCode: 152.43
    },
    {
        complexCode: 3000,
        complexDongCode: 5555,
        complexHoCode: 6666,
        complexLandCode: 34.56
    },
    {
        complexCode: 4000,
        complexDongCode: 5555,
        complexHoCode: 8888,
        complexLandCode: 95.33
    }
];
var property = /** @class */ (function () {
    function property(complexCode) {
        this.complexCode = complexCode;
    }
    /**
     * 단지 정보 조회
     */
    property.prototype.getComplexGroupByComplexCode = function () {
        var _this = this;
        //const findComplex2 = tempComplexData.find((el: TComplex) => el.complexCode === this.complexCode); // ES2015부터 Array.property.find 메서드 사용 가능
        return tempComplexData.filter(function (el) { return el.complexCode === _this.complexCode; });
    };
    /**
     * 단지-동 정보 조회
     * @param complexDongCode
     */
    property.prototype.getComplexDongGroupByComplexDongCode = function (complexDongCode) {
        var _this = this;
        return tempComplexData.filter(function (el) {
            return el.complexCode === _this.complexCode
                && el.complexDongCode === complexDongCode;
        });
    };
    /**
     * 단지-호 정보 조회
     * @param complexDongCode
     * @param complexHoCode
     */
    property.prototype.getComplexHoGroupByComplexDongCodeAndComplexHoCode = function (complexDongCode, complexHoCode) {
        var _this = this;
        return tempComplexData.filter(function (el) {
            return el.complexCode === _this.complexCode
                && el.complexDongCode === complexDongCode
                && el.complexHoCode === complexHoCode;
        });
    };
    /**
     * 단지 전체 정보 조회
     */
    property.prototype.getComplexAll = function () {
        return tempComplexData;
    };
    return property;
}());
