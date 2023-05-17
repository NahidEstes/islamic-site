import React from "react";

const Books = () => {
  return (
    <div>
      <section>
        <div class="container p-4 mx-auto bg-white max-w-7xl sm:p-6 lg:p-8 dark:bg-gray-800">
          <div class="flex flex-wrap -mx-8">
            <div class="w-full px-8 lg:w-1/2">
              <div class="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
                <h2 class="mb-4 text-3xl font-bold lg:text-4xl font-heading dark:text-white">
                  Sed ac magna sit amet risus tristique interdum, at vel velit
                  in hac habitasse platea dictumst.
                </h2>
                <p class="mb-8 leading-loose text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  sagittis, quam nec venenatis lobortis, mi risus tempus nulla,
                  sed porttitor est nibh at nulla. Praesent placerat enim ut ex
                  tincidunt vehicula. Fusce sit amet dui tellus.
                </p>
                <div class="w-full md:w-1/3">
                  <button
                    type="button"
                    class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    See more
                  </button>
                </div>
              </div>
            </div>
            <div class="w-full px-8 lg:w-1/2">
              <ul class="space-y-12">
                <li class="flex -mx-4">
                  <div class="px-4">
                    <span class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                      1
                    </span>
                  </div>
                  <div class="px-4">
                    <h3 class="my-4 text-xl font-semibold dark:text-white">
                      Responsive Elements
                    </h3>
                    <p class="leading-loose text-gray-500 dark:text-gray-300">
                      All elements are responsive and provide the best display
                      in all screen size. It&#x27;s magic !
                    </p>
                  </div>
                </li>
                <li class="flex -mx-4">
                  <div class="px-4">
                    <span class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                      2
                    </span>
                  </div>
                  <div class="px-4">
                    <h3 class="my-4 text-xl font-semibold dark:text-white">
                      Flexible Team
                    </h3>
                    <p class="leading-loose text-gray-500 dark:text-gray-300">
                      Flexibility is the key. All team is available 24/24 and
                      joinable every day on our hotline.
                    </p>
                  </div>
                </li>
                <li class="flex -mx-4">
                  <div class="px-4">
                    <span class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                      3
                    </span>
                  </div>
                  <div class="px-4">
                    <h3 class="my-4 text-xl font-semibold dark:text-white">
                      Ecologic Software
                    </h3>
                    <p class="leading-loose text-gray-500 dark:text-gray-300">
                      Our Software are ecologic and responsable. Green is not
                      just a color, it&#x27;s a way of life.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Books;
