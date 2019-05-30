import sample from './sample';

test('the data is peanut butter', () => {
    const data = sample(2,4);
      expect(data).toBe(6);
  });
  
