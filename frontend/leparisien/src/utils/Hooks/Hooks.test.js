import { useFetch, useFinditem } from "./hooks";
describe("useFetch", () => {
    it("fetches data and sets it in the state", async () => {
        // setup
        const url = "https://jsonplaceholder.typicode.com/posts";
        const { isLoading, data, error } = useFetch(url);

        // check initial state
        expect(isLoading).toBe(true);
        expect(data).toEqual({});
        expect(error).toBe(false);

        // wait for the data to be fetched
        await waitForNextTick();

        // check final state
        expect(isLoading).toBe(false);
        expect(data).toHaveLength(100);
        expect(error).toBe(false);
    });

    it("sets error in the state when fetch fails", async () => {
        // setup
        const url = "https://jsonplaceholder.typicode.com/INVALID_URL";
        const { isLoading, data, error } = useFetch(url);

        // check initial state
        expect(isLoading).toBe(true);
        expect(data).toEqual({});
        expect(error).toBe(false);

        // wait for the data to be fetched
        await waitForNextTick();

        // check final state
        expect(isLoading).toBe(false);
        expect(data).toEqual({});
        expect(error).toBe(true);
    });
});
describe('useFinditem hook', () => {
    it('should return the correct data', async () => {
        const fakeData = [
            { _id: '1', title: 'Article 1', body: 'Contenu article 1' },
            { _id: '2', title: 'Article 2', body: 'Contenu article 2' },
        ];

        jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
            Promise.resolve({
                json: () => Promise.resolve(fakeData),
            })
        );

        const { result, waitForNextUpdate } = renderHook(() =>
            useFinditem('fake-url', '1')
        );

        expect(result.current.isLoadingArt).toBe(true);

        await waitForNextUpdate();

        expect(result.current.dataArt).toEqual({
            _id: '1',
            title: 'Article 1',
            body: 'Contenu article 1',
        });
        expect(result.current.isLoadingArt).toBe(false);
        expect(result.current.errorArt).toBe(false);
    });

    it('should return an error', async () => {
        jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
            Promise.reject(new Error('fake error'))
        );

        const { result, waitForNextUpdate } = renderHook(() =>
            useFinditem('fake-url', '1')
        );

        expect(result.current.isLoadingArt).toBe(true);

        await waitForNextUpdate();

        expect(result.current.errorArt).toBe(true);
        expect(result.current.isLoadingArt).toBe(false);
    });
});
