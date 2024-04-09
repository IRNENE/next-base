// https://hackmd.io/@akiraloiter/H1KhF9s1_

// 純函數不得對參數做任何的修改

// 每個元件具有獨立性
// 透過父母元件或Context，不同元件才能共享狀態
// Context 用途做共享狀態使用，取代將prop 傳來傳去
// https://react.dev/learn/passing-data-deeply-with-context
// 自訂義hook會比useContext更簡潔，不用跳來跳去
// useContext 主要用于解决全局数据状态的传递问题，适合于需要在多个组件之间共享相同数据的场景。
// hook 中实现任何你想要的逻辑，包括状态管理、数据获取、副作用处理等；不一定非要与全局数据状态有关，它更多地用于封装组件逻辑，使得代码更加模块化、易于复用；自定义 hook 能够返回任何数据，而不仅限于全局数据状态，这使得它在某些情况下可以比 useContext 更为灵活。

// hook可以彼此使用
// 僅函式型元件可以彼此使用
