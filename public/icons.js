const ICONS = {
  github: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"/><path d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"/></svg>',
  youtube: '<svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>',
  gmail: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke-width="0" role="img" viewBox="-3 -3 30 30" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path></svg>',
  instagram: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"/></svg>',
  reddit: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"/><path d="M11.102 7.815l.751-3.536a2 2 0 0 1 2.373-1.54l3.196.68a2 2 0 1 1-.416 1.956l-3.196-.68-.666 3.135c1.784.137 3.557.73 5.163 1.7a3.192 3.192 0 0 1 4.741 2.673v.021a3.192 3.192 0 0 1-1.207 2.55 2.855 2.855 0 0 1-.008.123c0 3.998-4.45 7.03-9.799 7.03-5.332 0-9.708-3.024-9.705-6.953a5.31 5.31 0 0 1-.01-.181 3.192 3.192 0 0 1 3.454-5.35 11.446 11.446 0 0 1 5.329-1.628zm9.286 5.526c.408-.203.664-.62.661-1.075a1.192 1.192 0 0 0-2.016-.806l-.585.56-.67-.455c-1.615-1.098-3.452-1.725-5.23-1.764h-1.006c-1.875.029-3.651.6-5.237 1.675l-.663.45-.584-.55a1.192 1.192 0 1 0-1.314 1.952l.633.29-.054.695c-.013.17-.013.339.003.584 0 2.71 3.356 5.03 7.708 5.03 4.371 0 7.799-2.336 7.802-5.106a3.31 3.31 0 0 0 0-.508l-.052-.672.604-.3zM7 13.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm7 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm-1.984 5.103c-1.397 0-2.767-.37-3.882-1.21a.424.424 0 0 1 .597-.597c.945.693 2.123.99 3.269.99s2.33-.275 3.284-.959a.439.439 0 0 1 .732.206.469.469 0 0 1-.119.423c-.684.797-2.484 1.147-3.881 1.147z"/></svg>',
  spotify: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.55 2 12 2zm3.75 14.65c-2.35-1.45-5.3-1.75-8.8-.95-.35.1-.65-.15-.75-.45-.1-.35.15-.65.45-.75 3.8-.85 7.1-.5 9.7 1.1.35.15.4.55.25.85-.2.3-.55.4-.85.2zm1-2.7c-2.7-1.65-6.8-2.15-9.95-1.15-.4.1-.85-.1-.95-.5-.1-.4.1-.85.5-.95 3.65-1.1 8.15-.55 11.25 1.35.3.15.45.65.2 1s-.7.5-1.05.25zM6.3 9.75c-.5.15-1-.15-1.15-.6-.15-.5.15-1 .6-1.15 3.55-1.05 9.4-.85 13.1 1.35.45.25.6.85.35 1.3-.25.35-.85.5-1.3.25C14.7 9 9.35 8.8 6.3 9.75z"/></svg>',
  stackoverflow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"/><path d="M18 20.002V15h2v7.002H4V15h2v5.002h12zM7.5 18v-2h9v2h-9zm.077-4.38l.347-1.97 8.864 1.563-.348 1.97-8.863-1.563zm1.634-5.504l1-1.732 7.794 4.5-1 1.732-7.794-4.5zm3.417-4.613l1.532-1.286 5.785 6.895-1.532 1.285-5.785-6.894z"/></svg>',
  telegram: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -7 115 115" fill="currentcolor"><path d="M89.442,11.418c-12.533,5.19-66.27,27.449-81.118,33.516c-9.958,3.886-4.129,7.529-4.129,7.529s8.5,2.914,15.786,5.1c7.286,2.186,11.172-0.243,11.172-0.243l34.244-23.073c12.143-8.257,9.229-1.457,6.315,1.457c-6.315,6.315-16.758,16.272-25.501,24.287c-3.886,3.4-1.943,6.315-0.243,7.772c6.315,5.343,23.558,16.272,24.53,17.001c5.131,3.632,15.223,8.861,16.758-2.186c0,0,6.072-38.13,6.072-38.13c1.943-12.872,3.886-24.773,4.129-28.173C98.185,8.018,89.442,11.418,89.442,11.418z"/></svg>',
  translate: '<svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="-2 -2 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"></path><path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"></path></svg>',
  twitch: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 3v11.74l-4.696 4.695h-3.913l-2.437 2.348H6.913v-2.348H3V6.13L4.227 3H21zm-1.565 1.565H6.13v11.74h3.13v2.347l2.349-2.348h4.695l3.13-3.13V4.565zm-3.13 3.13v4.696h-1.566V7.696h1.565zm-3.914 0v4.696h-1.565V7.696h1.565z"/></svg>',
  twitter: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z"/></svg>',
  whatsApp: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.253 18.494l.724.423A7.953 7.953 0 0 0 12 20a8 8 0 1 0-8-8c0 1.436.377 2.813 1.084 4.024l.422.724-.653 2.401 2.4-.655zM2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308c.134-.01.269-.01.403-.004.054.004.108.01.162.016.159.018.334.115.393.249.298.676.588 1.357.868 2.04.062.152.025.347-.093.537a4.38 4.38 0 0 1-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268.12.116.237.235.363.346.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11.062.026.126.049.191.066a.35.35 0 0 0 .367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 0 1 .378-.127c.06.004.121.015.177.04.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265.004.067.01.175-.013.373-.032.259-.11.57-.188.733a1.155 1.155 0 0 1-.21.302 2.378 2.378 0 0 1-.33.288 3.71 3.71 0 0 1-.125.09 5.024 5.024 0 0 1-.383.22 1.99 1.99 0 0 1-.833.23c-.185.01-.37.024-.556.014-.008 0-.568-.087-.568-.087a9.448 9.448 0 0 1-3.84-2.046c-.226-.199-.435-.413-.649-.626-.89-.885-1.562-1.84-1.97-2.742A3.47 3.47 0 0 1 6.9 9.62a2.729 2.729 0 0 1 .564-1.68c.073-.094.142-.192.261-.305.127-.12.207-.184.294-.228a.961.961 0 0 1 .371-.1z"/></svg>',
  chatGPT: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:v="https://vecta.io/nano" viewBox="-16.5 -16.5 338.667 338.667" fill="currentColor"><path d="M138.9,0c-34.5,0-65.1,22.2-75.7,54.9C41,59.5,21.9,73.4,10.7,93c-17.3,29.9-13.3,67.4,9.8,93  c-7.1,21.4-4.7,44.9,6.7,64.3c17.2,30,51.7,45.3,85.5,38.2c15,16.9,36.5,26.5,59.1,26.5c34.5,0,65.1-22.2,75.7-54.9  c22.2-4.6,41.3-18.5,52.4-38.1c17.4-29.9,13.4-67.4-9.7-93v-0.1c7.1-21.4,4.7-44.9-6.7-64.4c-17.2-29.9-51.7-45.2-85.4-38.1  C183.1,9.5,161.5-0.1,138.9,0z M138.9,20.5l-0.1,0.1c13.9,0,27.2,4.8,37.9,13.7c-0.4,0.2-1.3,0.7-1.9,1.1L112,71.5  c-3.2,1.8-5.1,5.2-5.1,9v84.9l-27-15.6V79.6C79.9,47,106.3,20.5,138.9,20.5L138.9,20.5z M214.5,45.2c21.2,0,40.7,11.2,51.3,29.6  c6.8,11.9,9.4,25.9,7,39.5c-0.4-0.3-1.3-0.7-1.8-1.1l-62.7-36.3c-3.2-1.8-7.1-1.8-10.3,0l-73.5,42.5V88.2l60.7-35.1  C194,47.9,204.1,45.2,214.5,45.2L214.5,45.2z M59.3,77.4V152c0,3.7,1.9,7,5.1,9l73.4,42.3L110.7,219l-60.6-35  c-28.2-16.3-37.8-52.4-21.5-80.6C35.5,91.4,46.4,82.2,59.3,77.4L59.3,77.4z M199.9,95.9l60.7,35c28.3,16.3,37.9,52.4,21.5,80.6  l0.1,0.1c-6.9,11.9-17.8,21.1-30.7,25.8v-74.6c0-3.7-1.9-7.1-5.1-9l-73.5-42.5L199.9,95.9z M155.3,121.6l30.9,17.9v35.7l-30.9,17.9  l-30.9-17.9v-35.7L155.3,121.6z M204,149.8l27,15.6v70.1c0,32.6-26.5,59.1-59,59.1v-0.1c-13.8,0-27.2-4.8-37.8-13.7  c0.4-0.2,1.4-0.7,1.9-1.1l62.7-36.2c3.2-1.8,5.2-5.2,5.1-9L204,149.8z M186.4,195.6v31.1l-60.7,35C97.4,278,61.4,268.4,45,240.2h0.1  c-6.9-11.8-9.4-25.9-7-39.5c0.4,0.3,1.3,0.7,1.8,1.1l62.7,36.3c3.2,1.8,7.1,1.8,10.3,0L186.4,195.6z"/></svg>',
  discord: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="-1 -0.75 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path></svg>',
  wikipedia: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8.835 3.003c.828-.006 2.688 0 2.688 0l.033.03v.288c0 .08-.045.12-.133.12-.433.02-.522.063-.68.29-.087.126-.258.393-.435.694l-1.52 2.843-.043.089 1.858 3.801.113.031 2.926-6.946c.102-.28.086-.478-.044-.595-.132-.114-.224-.18-.563-.195l-.275-.014a.161.161 0 0 1-.096-.035.1.1 0 0 1-.046-.084v-.289l.042-.03h3.306l.034.03v.29c0 .078-.045.117-.133.117-.433.02-.754.113-.962.281a1.64 1.64 0 0 0-.488.704s-2.691 6.16-3.612 8.208c-.353.672-.7.61-1.004-.019A224.05 224.05 0 0 1 8.044 8.81c-.623 1.285-1.475 3.026-1.898 3.81-.411.715-.75.622-1.02.019-.45-1.065-1.131-2.519-1.817-3.982-.735-1.569-1.475-3.149-1.943-4.272-.167-.4-.293-.657-.412-.759-.12-.1-.368-.16-.746-.18C.069 3.429 0 3.395 0 3.341v-.303l.034-.03c.615-.003 3.594 0 3.594 0l.034.03v.288c0 .08-.05.118-.15.118l-.375.016c-.322.013-.483.11-.483.288 0 .083.034.217.109.4.72 1.753 3.207 6.998 3.207 6.998l.091.023 1.603-3.197-.32-.71L6.24 5.095s-.213-.433-.286-.577l-.098-.196c-.387-.77-.411-.82-.865-.88-.137-.017-.208-.035-.208-.102v-.304l.041-.03h2.853l.075.024v.303c0 .069-.05.104-.15.104l-.206.03c-.523.04-.438.254-.09.946l1.057 2.163 1.17-2.332c.195-.427.155-.534.074-.633-.046-.055-.202-.144-.54-.158l-.133-.015a.159.159 0 0 1-.096-.034.099.099 0 0 1-.045-.085v-.288l.041-.03Z"></path></svg>',
  linkedin: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="-80 -50 600 600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>',
  slack: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M6.527 14.514A1.973 1.973 0 0 1 4.56 16.48a1.973 1.973 0 0 1-1.967-1.967c0-1.083.884-1.968 1.967-1.968h1.968v1.968zm.992 0c0-1.083.884-1.968 1.967-1.968 1.083 0 1.968.885 1.968 1.968v4.927a1.973 1.973 0 0 1-1.968 1.967 1.973 1.973 0 0 1-1.967-1.967v-4.927zm1.967-7.987A1.973 1.973 0 0 1 7.52 4.56c0-1.083.884-1.967 1.967-1.967 1.083 0 1.968.884 1.968 1.967v1.968H9.486zm0 .992c1.083 0 1.968.884 1.968 1.967a1.973 1.973 0 0 1-1.968 1.968H4.56a1.973 1.973 0 0 1-1.967-1.968c0-1.083.884-1.967 1.967-1.967h4.927zm7.987 1.967c0-1.083.885-1.967 1.968-1.967s1.967.884 1.967 1.967a1.973 1.973 0 0 1-1.967 1.968h-1.968V9.486zm-.992 0a1.973 1.973 0 0 1-1.967 1.968 1.973 1.973 0 0 1-1.968-1.968V4.56c0-1.083.885-1.967 1.968-1.967s1.967.884 1.967 1.967v4.927zm-1.967 7.987c1.083 0 1.967.885 1.967 1.968a1.973 1.973 0 0 1-1.967 1.967 1.973 1.973 0 0 1-1.968-1.967v-1.968h1.968zm0-.992a1.973 1.973 0 0 1-1.968-1.967c0-1.083.885-1.968 1.968-1.968h4.927c1.083 0 1.967.885 1.967 1.968a1.973 1.973 0 0 1-1.967 1.967h-4.927z"></path></g></svg>',
  netflix: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="-1 -1 26 26" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.002-22.95zM5.398 1.05V24c1.873-.225 2.81-.312 4.715-.398v-9.22z"></path></svg>',
  gdrive: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z"></path></svg>',
  amazon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M48.48 378.73a300.52 300.52 0 00152.89 95.92 262.57 262.57 0 00159.3-17.25 225.52 225.52 0 0066.79-47 6.36 6.36 0 00-2-8.53 11.76 11.76 0 00-8-.05 401.92 401.92 0 01-116.55 39.34 358.13 358.13 0 01-127.29-8.83 446.73 446.73 0 01-119.1-60.49 5 5 0 00-6.06 6.9z"></path><path d="M387.15 388.44a168.11 168.11 0 0148.94-2.23l.67.13a10 10 0 017.37 12.05A204.71 204.71 0 01429 444.47a2.55 2.55 0 001.66 3.18 2.51 2.51 0 002.23-.37A83.31 83.31 0 00464 382.86a12.44 12.44 0 00-10.22-13.22A95.75 95.75 0 00384.91 384a2.55 2.55 0 00-.57 3.55 2.52 2.52 0 002.81.89zm-82.91-63.52a164 164 0 01-28.92 25.3A135.16 135.16 0 01208.63 369a99.49 99.49 0 01-57.49-19.85 97.25 97.25 0 01-27.36-100.28 112.35 112.35 0 0165.3-69.06 367.67 367.67 0 01104.7-15.55V127A37.82 37.82 0 00261 94.72a59.9 59.9 0 00-31.17 4.08 48.89 48.89 0 00-27.13 34.67 12 12 0 01-12.58 6.72l-50.9-4.5a11.38 11.38 0 01-8.38-10.16 103.66 103.66 0 0136.61-63.45A143.86 143.86 0 01257.85 32a146.24 146.24 0 0184.27 27.67 86.82 86.82 0 0130.7 70.22V258.8a84.46 84.46 0 008 31.28l15.87 23.23a13 13 0 010 11.23l-46.99 39.71a12.5 12.5 0 01-12.68-.44 244.84 244.84 0 01-32.78-38.89zm-10.6-116.83a257.68 257.68 0 00-44 2.89A63 63 0 00208 242.54a63 63 0 003.07 54 40.6 40.6 0 0047.11 12.19 78.61 78.61 0 0035.46-55.58v-45.06"></path></svg>'
}

export default ICONS