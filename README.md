RPC API push transaction Submit your code/software solution for pushing transactions with RPC API on Inery testnet blockchain. 
You will have to :
Clone this git repository.
Add your directory to Submit folder (Directory should be named as your blockchain account name)
Inside your directory, you will add your software solution for task 4
You will create a merge request and we will validate your work.
If you succeed we will accept your merge and you will complete task 4.

# Json RPC Sample for Task 4 Inery Blockchain
A Sample code to call JSON RPC on Inery Blockchain

## Getting Started

JSON RPC Sample code are available at [example](https://github.com/alteregogi/ineryjs/blob/master/example/) directory, you can try to modify and understand how it works, you also need to have Valued Smart Contract ( Task 3 ) in your Account, to able run your code and call the valued contract function.


### Prerequisites

- Your Favorite Code Editor
- Git
- [Node.Js](https://nodejs.dev/en/)

  - Ubuntu Installation Tutorial

    Remove Previous Nodejs

    ```
    sudo apt-get remove nodejs
    ```

    Install Curl

    ```
    sudo apt-get install curl
    ```

    Install NodeJS

    ```
    curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash - &&\
    sudo apt-get install -y nodejs
    ```

    

  - [Windows Installation](https://nodejs.org/dist/v18.12.1/node-v18.12.1-x64.msi)

- npm

  - Ubuntu

  ```
  sudo apt install npm
  ```


### Installation

1. Clone the repo

   ```
   git clone https://github.com/alteregogi/ineryjs.git
   ```

2. Change directory to cloned repo

   ```
   cd ineryjs
   ```

3. Install NPM packages

   ```
   sudo npm install
   ```

4. Copy `.env-sample` and rename it to `.env`

   ```
   cp .env-sample .env
   ```

5. Edit ```.env``` file with your information

   ```
   nano .env
   ```


## Usage

Run RPC Example

```
npm run rpc-example
```
Run RPC Transfer Example

```
node example/transfer.mjs
```
