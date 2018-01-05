var GuidMock = (function () {
    function GuidMock() {
    }
    GuidMock.newMockGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (x) {
            var r = Math.random() * 16 | 0, v = x == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return GuidMock;
}());
export { GuidMock };
//# sourceMappingURL=guid-mock.model.js.map