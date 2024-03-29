import React from "react";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";

import { PureInboxScreen } from "./InboxScreen";
import * as TaskListStories from "./TaskList.stories";

export default {
  component: PureInboxScreen,
  title: "InboxScreen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

const store = {
  getState: () => {
    return {
      tasks: TaskListStories.Default.args.tasks,
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

const Template = (args) => {
  return <PureInboxScreen {...args} />;
};

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "Something",
};
