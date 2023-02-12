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

