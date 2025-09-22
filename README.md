Your task is to build a very simple **Notes App** with a minimal backend (Express) and frontend (React). The basic starter code is provided in this repository and the instructions on how to get started are below. The goal is to see how you approach **full-stack development** — not to trick you. You have about 90 minutes to implement as much features as you can based on the listed specifications. Focus on correctness, clarity, and simplicity. After you are done, we will have a short discussion about your implementation.

### The assignment

**Part 1: Debug health-check route**

- There is a `/health-check` route in the ui and it is fetching `/health-check` route from the backend. But it is not working. Please fix it.

**Part 2: Implement notes CRUD**

- The specifications for what to implement are in the `README.md` file in both `frontend` and `backend` directories.
- You can create new files and directories as needed.
- You can use any libraries as needed.
- You can use browse the internet for documentation and examples.
- You can not use any llm tools like chatgpt, copilot, etc to write the code.

### Setup the project

- Fork the repository to your own GitHub account.
- If you have `node.js` and `vscode` installed on your machine, clone the forked repository to your local machine.
- If you don't have `node.js` and `vscode` installed on your machine, create a new codespace from the forked repository.
- (Optional) Install the recommended extensions for the code editor.
- Open the terminal in the codespace
  - Change directory to `backend` and run `npm install` to install the dependencies.
  - Change directory to `frontend` and run `npm install` to install the dependencies.
- Start the backend server by running `npm run dev` in the `backend` directory.
- Start the frontend server by running `npm start` in the `frontend` directory.
- Add `.env.local` file in the `frontend` directory and add api url as in `.env.example` file.
  - If you are using codespace,
    - The api url will be in the `ports` tab in the codespace
    - You have to make the port public to access it from the frontend.
