const env: any = {};

for (let key in process.env) {
  if (key.indexOf("REACT_APP_") === 0) {
    let newKey = key.replace("REACT_APP_", "");
    if (!process.env[newKey]) {
      env[newKey] = process.env[key];
    }
    continue;
  }

  env[key] = process.env[key];
}

export default env;
