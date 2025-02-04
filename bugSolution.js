```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrlChange = (url) => {
      console.log('URL changed:', url);
      setInitialUrl(url);
    };
    const linkSubscription = Linking.addEventListener('url', handleUrlChange);

    // Check for initial URL on app start
    Linking.getInitialURL().then(url => {
        if(url) {
          handleUrlChange(url);
        }
      }).catch(err => console.error("Error getting initial URL", err));

    return () => {
      linkSubscription.remove();
    };
  }, []);

  return (
    <View>
      {initialUrl && <Text>Initial URL: {initialUrl}</Text>}
    </View>
  );
};

export default App;
```