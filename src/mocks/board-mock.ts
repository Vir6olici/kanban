const mock: any = {
  tasks: [
    {
      id: "1",
      title: "todo",
      statusColor: "#49C4E5",
      values: [
        {
          id: "1",
          title: "Build UI for onboarding flow",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet nulla sit amet mi semper molestie. Aliquam feugiat metus a sem placerat, a rutrum elit accumsan",
          subTasks: [
            { title: "Lorem ipsum dolor sit amet", done: true },
            { title: "Lorem ipsum dolor sit amet", done: true },
            { title: "Lorem ipsum dolor sit amet", done: false },
          ],
        },
      ],
    },
  ],
};

export default mock;
