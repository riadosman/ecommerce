import React from "react";

export const Steps = () => {
  const people = [
    {
      name: 'Step 0',
      role: 'Step 0 description',
      imageUrl:
        'https://picsum.photos/200/300',
    },
    {
      name: 'Step 1',
      role: 'Step 1 description',
      imageUrl:
        'https://picsum.photos/200/300',
    },
    {
      name: 'Step 2',
      role: 'Step 2 description',
      imageUrl:
        'https://picsum.photos/200/300',
    },
    {
      name: 'Step 3',
      role: 'Step 3 description',
      imageUrl:
        'https://picsum.photos/200/300',
    },
    {
      name: 'Step 4',
      role: 'Step 4 description',
      imageUrl:
        'https://picsum.photos/200/300',
    },
    {
      name: 'Step 5',
      role: 'Step 5 description',
      imageUrl:
        'https://picsum.photos/200/300',
    },
    // More people...
  ]
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Order Steps
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
