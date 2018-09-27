// 29: array - `Array.from` static method
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.from` converts an array-like object or list into an Array', () => {

    const arrayLike = {0: 'one', 1: 'two', length: 2};
    
    it('call `Array.from` with an array-like object', function() {
      const arr = arrayLike;
      const Arr = Array.from(arr)
      return Arr
      assert.deepEqual(arr, ['one', 'two']);
    });
    
    it('a DOM node`s classList object can be converted', function() {
      const domNode = document.createElement('span');
      domNode.classList.add('some');
      domNode.classList.add('other');
      const classList = domNode.classList;
      const arr=Array.from(classList)
      return arr
  
      assert.equal(''+classList, ''+['some', 'other']);
    });
    
    it('convert a NodeList to an Array and `filter()` works on it', function() {
      const nodeList = document.createElement('span');
      const nodes = Array.from(nodeList)
      const divs = nodes.filter((node) => node.tagName === 'div');
      return 
      console.log(arr)
      assert.deepEqual(divs.length, 0);
    });
    
    describe('custom conversion using a map function as second param', () => {
      it('we can modify the value before putting it in the array', function() {
        const arr = Array.from(arrayLike, (value) => value.toUpperCase());
        return arr
  
        assert.deepEqual(arr, ['ONE', 'TWO']);
      });
      
      it('and we also get the object`s key as second parameter', function() {
        const arr = Array.from(arrayLike, (key, value) => `${key}=${value}`);
        return arr
        assert.deepEqual(arr, ['0=one', '1=two']);
      });
    });
    
  });