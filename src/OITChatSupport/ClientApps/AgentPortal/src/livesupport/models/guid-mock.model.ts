export class GuidMock {
    static newMockGuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, x => {
            let r = Math.random() * 16 | 0, v = x == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}