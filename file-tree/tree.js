import { uuidV4 } from "./functions.js";

export const tree = {
  id: "root",
  name: "root",
  type: "folder",
  children: [
    {
      id: uuidV4(),
      name: "folder1",
      type: "folder",
      children: [
        {
          id: uuidV4(),
          name: "file1-1.txt",
          type: "file",
        },
        {
          id: uuidV4(),
          name: "folder3",
          type: "folder",
          children: [
            {
              id: uuidV4(),
              name: "folder1Child",
              type: "folder",
              children: [
                {
                  id: uuidV4(),
                  name: "file1-1.txt",
                  type: "file",
                },
                {
                  id: uuidV4(),
                  name: "file1-2.txt",
                  type: "file",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: uuidV4(),
      name: "folder2",
      type: "folder",
      children: [
        {
          id: uuidV4(),
          name: "file2-1.txt",
          type: "file",
        },
        {
          id: uuidV4(),
          name: "file2-2.txt",
          type: "file",
        },
      ],
    },
    {
      id: uuidV4(),
      name: "file3.txt",
      type: "file",
    },
  ],
};
