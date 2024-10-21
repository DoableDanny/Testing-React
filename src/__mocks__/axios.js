const mockAxios = jest.genMockFromModule("axios");

// Mock the `get` method (you can also mock post, put, etc.)
mockAxios.get.mockResolvedValue({ data: {} });

export default mockAxios;
