function smartConfig(defaultValue) {
  const cacheEntry = {};
  return {
    get(key) {
      //return (key) ? cacheEntry[key] : defaultValue;
        if ( Object.keys(cacheEntry).some(item => item === key)){
            return cacheEntry[key];
        } else {
            return defaultValue;
        }
    },
    set(key, value) {
      cacheEntry[key] = value;
    }
  }
}

// примериспользования

const config = smartConfig('default value');

config.set('1', null);
console.log(config.get('1'));

config.set('2', undefined);
console.log(config.get('2'));

config.set('3', NaN);
console.log(config.get('3'));

config.set('4', false);
console.log(config.get('4'));

config.set('some', 'value');
console.log(config.get('some'));
console.log(config.get('non_existing_key'));

//нужно починить.