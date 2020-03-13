- [ ] Why would you use class component over function components (removing hooks from the question)?

         One of the main reasons to use class components over function components is that when you 'extend' React.Component when building a class component you have access to the React Lifecycle methods. These methods include componentDidMount and componentDidUpdate. These lifecycle methods are not available when developing function components in React.

- [ ] Name three lifecycle methods and their purposes.

         1.  componentDidMount - This lifecycle method will run when your React class component is mounted. This lifcycle method is part of the 'mounting phase' of the React lifecycle. Within this function is where you load in your data, i.e. axios/fetch API calls etc.

         2.  componentDidUpdate - This lifecycle method is part of the 'updating phase' of the React lifecycle and will be invoked when there are changes to state or props. The most common use case for this method is to update the DOM in response to those changes in state or props.

         3.  componentWillUnmount - This is the lifecycle method that resides in the third and final phase of the React lifecycle, the 'unmounting phase'. The purpose of this method is for cleanup. This is where you are able to remove any and all event listeners from your components to avoid memory leaks as well as cancel any remaining outgoing network requests.  

- [ ] What is the purpose of a custom hook?

          Custom hooks are a way to wrap our existing React hooks that come with the latest version of React and to use them inside function components. This allows us to produce stateless logic that can be reused over and over again in your application. Custom hooks allow us to write DRY code that can be reused throughout our application.

- [ ] Why is it important to test our apps?

          Testing is the way we prevent bugs from ending up in production code. This ensures software quality and a seamless user experience. There are many reasons to test your code throughout the development process, some of which include thinking about edge case uses, serving as documentation for our code and reducing the risk of regression.