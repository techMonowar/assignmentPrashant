import Image from "next/image";
import Searchbar from "@/app/components/searchbar"

export default function Header() {
  return (
  <div>
    <div id="main-nav-bar" class="h-12 bg-red-600">
    <div class="mx-auto h-full max-w-screen-2xl select-none text-white">
        <div class="flex h-full justify-between text-xs">
            <div className="flex items-stretch pl-4 text-sm laptop:pl-8">
                <a href="/" class="shrink-0 self-center"><img class="mr-2 h-8 w-8 rounded-full" src="https://acharyaprashant.org/images/ic_favicon.png" alt="Acharya Prashant"></img></a>
                <div className="hidden h-full flex-row items-stretch justify-center font-medium tab:flex">
                    <a id="main-website-nav-item-internal-home" href="/" class="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 svelte-ay56ew">
                        <div className="relative flex items-center space-x-2"><span class="font-en svelte-t3mcl">Home</span></div>
                    </a>
                    <div id="main-website-nav-item-in-place-live" class="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 svelte-ay56ew hover:bg-brand-600">
                        <div className="relative flex items-center space-x-2"><span class="font-en svelte-t3mcl">Live Sessions</span>
                            <div className="pt-0.5 transition duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" class="fill-current">
                                    <path d="M.208.255A.7.7 0 0 0 0 .796a.9.9 0 0 0 .238.582l3.754 4.115q.317.337.659.45.342.111.688.005.348-.107.664-.455l3.744-4.115A.8.8 0 0 0 10 .802a.72.72 0 0 0-.213-.547A.75.75 0 0 0 9.222 0H.773a.75.75 0 0 0-.565.255"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <a id="main-website-nav-item-internal-courses" href="/en/courses" class="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 svelte-ay56ew bg-brand-600">
                        <div class="relative flex items-center space-x-2"><span class="font-en svelte-t3mcl">Video Series</span></div>
                    </a>
                    <a id="main-website-nav-item-internal-books" href="/en/books" class="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 svelte-ay56ew">
                        <div class="relative flex items-center space-x-2"><span class="font-en svelte-t3mcl">AP Books</span></div>
                    </a>
                    <a id="main-website-nav-item-internal-articles" href="/en/articles" class="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 svelte-ay56ew">
                        <div class="relative flex items-center space-x-2"><span class="font-en svelte-t3mcl">AP Articles</span></div>
                    </a>
                    <div id="main-website-nav-item-in-place-invite" class="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 svelte-ay56ew hover:bg-brand-600">
                        <div class="relative flex items-center space-x-2"><span class="font-en svelte-t3mcl">Invite</span>
                            <div class="pt-0.5 transition duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" class="fill-current">
                                    <path d="M.208.255A.7.7 0 0 0 0 .796a.9.9 0 0 0 .238.582l3.754 4.115q.317.337.659.45.342.111.688.005.348-.107.664-.455l3.744-4.115A.8.8 0 0 0 10 .802a.72.72 0 0 0-.213-.547A.75.75 0 0 0 9.222 0H.773a.75.75 0 0 0-.565.255"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <a id="main-website-nav-item-internal-media" href="/en/media" class="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 svelte-ay56ew">
                        <div class="relative flex items-center space-x-2"><span class="font-en svelte-t3mcl">In Media</span></div>
                    </a>
                    <a id="main-website-nav-item-internal-careers" href="/en/hiring" class="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 svelte-ay56ew">
                        <div class="relative flex items-center space-x-2"><span class="font-en svelte-t3mcl">Careers</span></div>
                    </a>
                    <a id="main-website-nav-item-internal-contribute" href="/en/contribute" class="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 svelte-ay56ew">
                        <div class="relative flex items-center space-x-2"><span class="font-en svelte-t3mcl">Donate</span></div>
                    </a>
                </div>
            </div>
            <div class="flex h-full content-center items-center justify-center laptop:mt-[1px] laptop:pr-8"> <a class="rounded border-[1.5px] border-white px-2 text-sm tab:hidden" href="/en/contribute"><span class="font-en svelte-t3mcl">Donate</span></a>
                <div id="main-website-navbar-language-selector" class="ml-3 inline-flex cursor-pointer items-center px-2 tab:px-0 tab:px-1">
                    <div class="relative">
                        <div class="flex inline-flex items-center space-x-1 py-2 font-medium opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="21" viewBox="0 0 28 21" class="fill-current">
                                <path d="M24.193 0q1.904 0 2.855.904.885.84.947 2.437l.005.25v13.817q0 1.784-.952 2.688-.884.84-2.588.9l-.267.004H3.807q-1.878 0-2.843-.904-.895-.84-.96-2.437L0 17.409V3.591Q0 1.808.964.904q.895-.84 2.58-.9L3.806 0zm.435 1.5H3.346q-.897 0-1.371.458-.423.407-.47 1.166l-.005.195v14.375q0 .89.475 1.348.421.407 1.177.452l.194.006h21.282q.896 0 1.384-.458.434-.407.482-1.156l.006-.192V3.319q0-.903-.488-1.361T24.628 1.5M11.905 5.559v1.6H7.511v2.533h4.128v1.498H7.511v2.65h4.394v1.599h-6.32v-9.88zm3.236 0 4.35 6.572h.065V5.559h1.812v9.88h-1.61L15.391 8.83h-.057v6.609h-1.812v-9.88z"></path>
                            </svg>
                            <div class="pt-0.5 transition duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" class="fill-current">
                                    <path d="M.208.255A.7.7 0 0 0 0 .796a.9.9 0 0 0 .238.582l3.754 4.115q.317.337.659.45.342.111.688.005.348-.107.664-.455l3.744-4.115A.8.8 0 0 0 10 .802a.72.72 0 0 0-.213-.547A.75.75 0 0 0 9.222 0H.773a.75.75 0 0 0-.565.255"></path>
                                </svg>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
                <a id="main-website-navbar-contact-icon" class="ml-4.5 hidden text-white hover:cursor-pointer laptop:block" href="/en/enquiry">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="h-5 w-5 fill-current">
                        <path d="M11.895 16q1.062 0 1.817-.313.754-.314 1.388-1.017.052-.05.094-.103l.086-.103q.369-.403.544-.81a2 2 0 0 0 .176-.785q0-.447-.257-.862-.257-.417-.806-.785l-2.382-1.665a2.05 2.05 0 0 0-1.17-.39q-.612-.005-1.118.502l-.617.609q-.146.155-.287.167a.5.5 0 0 1-.305-.09 8 8 0 0 1-.544-.416 19 19 0 0 1-1.332-1.205q-.31-.3-.596-.614a12 12 0 0 1-.527-.613q-.24-.3-.394-.558a.42.42 0 0 1-.095-.296.5.5 0 0 1 .163-.287l.609-.618q.514-.514.51-1.128a2 2 0 0 0-.399-1.162L4.782 1.047Q4.413.515 3.998.262A1.7 1.7 0 0 0 3.137 0q-.789-.017-1.594.704a1 1 0 0 0-.108.09 1 1 0 0 1-.098.081Q.634 1.52.317 2.278 0 3.038 0 4.118q0 1.176.458 2.484.46 1.308 1.367 2.664a18 18 0 0 0 2.237 2.685 18.6 18.6 0 0 0 2.674 2.217q1.345.906 2.657 1.369 1.311.463 2.502.463m0-1.295q-1.037.008-2.211-.455a11.6 11.6 0 0 1-2.365-1.296 17 17 0 0 1-2.28-1.921 17 17 0 0 1-1.941-2.3A12 12 0 0 1 1.765 6.32q-.48-1.197-.462-2.235.008-.66.244-1.218a2.64 2.64 0 0 1 .788-1.038l.082-.069q.172-.146.355-.227a.9.9 0 0 1 .365-.082q.376 0 .6.343l1.55 2.317a.66.66 0 0 1 .13.411q-.01.214-.207.412l-.685.678q-.437.438-.437.922t.3.905q.334.465.878 1.081.544.617 1.033 1.107.342.335.754.716.412.382.814.725.403.344.703.566.42.3.904.3t.921-.445l.677-.678q.197-.206.416-.21a.7.7 0 0 1 .416.133L14.2 12.26q.18.12.257.274a.74.74 0 0 1 .078.335q0 .351-.309.72a2 2 0 0 1-.137.155q-.403.471-.968.708a3.4 3.4 0 0 1-1.226.253"></path>
                    </svg>
                </a>
                <div id="main-website-right-menu-btn" class="mx-2 inline-flex cursor-pointer items-center px-2 py-2 text-white tab:pl-0 tab:pr-4 pl-1 tab:pl-1 laptop:pl-[11px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" class="fill-current">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.826" d="M1 1.609h20M1 8h20M1 14.391h20"></path>
                    </svg>
                    <div class="hidden pl-2 laptop:block"><span class="font-en svelte-t3mcl">Menu</span></div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="z-banner flex w-full items-center justify-between bg-slate-800 px-4 py-2 laptop:justify-center laptop:py-3.5">
    <div class="flex laptop:items-center">
        <div class="mr-2 mt-0.5 h-4 w-4 shrink-0 rounded-full border border-white bg-red-600 laptop:mt-0"></div>
        <div class="text-sm text-white laptop:text-lg"><span class="font-en dynamicHTMLContainer svelte-t3mcl">Acharya Prashant is dedicated to building a brighter future for you</span></div>
    </div>
    <div class="shrink-0 pl-5 text-sm"><a class="flex items-center rounded-md border border-gray-200 px-2 py-1 text-white laptop:py-0.75" href="/en/contribute/contribute-work?cmId=m00071"><span class="font-en svelte-t3mcl">Extend your hand</span></a></div>
</div>


<searchbar />

</div>








   


  );
}
