## [tjerkwoudsma.com](https://tjerkwoudsma.com) frontend  
Source code for my portfolio website.  
**_Quick and Dirty._**  

Built using React and the Tumblr API.  
Development server and production builds are handled by `react-scripts`.  

#### Installation
```sh
git clone git@github.com:woudsma/tjerkwoudsma.com.git
cd tjerkwoudsma.com
npm install
```

#### Usage
Get a Tumblr API key using the [API documentation](https://www.tumblr.com/docs/en/api/v2)  
```sh
# Create a .env.local file with environment variables:
cat << EOF >> .env.local
REACT_APP_API_URL=https://api.tumblr.com
REACT_APP_API_KEY=yourkey
EOF

# Start development server on localhost:3000
npm start

# Create production build, outputs to ./build folder
npm run build

# Serve production build locally
serve -s build
php -S localhost:5000 -t build
```
#### Docker
```sh
# Build app
docker build \
  --build-arg REACT_APP_API_URL=https://api.tumblr.com \
  --build-arg REACT_APP_API_KEY=yourkey \
  -t tjerkwoudsma.com .

# Run app container on localhost:5000
docker run --rm -it -p 5000:5000 tjerkwoudsma.com
```