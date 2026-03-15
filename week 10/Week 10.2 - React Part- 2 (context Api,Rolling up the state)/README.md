for all documentation :
                        http://petal-estimate-4e9.notion.site/18-useRef-11d7dfd107358014b36be6d95238c03d


# Custom hooks 

Custom hooks in React are a powerful feature that allows you to encapsulate and reuse stateful logic across different components. They are essentially JavaScript functions that can use React hooks internally. By creating custom hooks, you can abstract away complex logic, making your components cleaner and more manageable.

### Why Use Custom Hooks?

1. **Reusability**: If you find yourself using the same logic in multiple components, a custom hook can help you avoid code duplication.
2. **Separation of Concerns**: They allow you to separate business logic from UI logic, making your components more focused and easier to understand.


# Rolling up the state, unoptimal re-renders

As your application grows, you might find that multiple components need access to the same state.
Instead of duplicating state in each component, you can lift the state up to the LCA, allowing the
 common ancestor to manage it.

# Prop Drilling 

**Prop drilling** occurs when you need to pass data from a higher-level component down to a lower-level component that is several layers deep in the component tree. This often leads to the following issues:

   1. **Complexity:** You may have to pass props through many intermediate components that don’t use the props themselves, just to get them to the component that needs them.
   2. **Maintenance:** It can make the code harder to maintain, as changes in the props structure require updates in multiple components.

# Context API

  The Context API is a powerful feature in React that enables you to manage state across your application more effectively, especially when dealing with deeply nested components.

  The Context API provides a way to share values (state, functions, etc.) between components without having to pass props down manually at every level. 

  ### Jargon

- **Context**: This is created using `React.createContext()`. It serves as a container for the data you want to share.
- **Provider**: This component wraps part of your application and provides the context value to all its descendants. Any component that is a child of this Provider can access the context.
- **Consumer**: This component subscribes to context changes. It allows you to access the context value (using `useContext`  hook)



# Introducing Recoil

   To minimise the number of re-renders, and ensure that only components that are `subscribed` to a value `render`, state management was introduced.

There are many libraries that let you do state management - 

1. mobx
2. recoil
3. redux