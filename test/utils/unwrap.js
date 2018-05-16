
export const unwrapComponent = (component) => {
  if (component && component.WrappedComponent) {
    const unwrappedComponent = component.WrappedComponent;

    if (unwrappedComponent.WrappedComponent) {
      return unwrapComponent(unwrappedComponent);
    }

    return unwrappedComponent;
  }

  return component;
};
