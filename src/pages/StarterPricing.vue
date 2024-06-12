<template>
    <div>

        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                    type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Connect</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                    type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Business</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane"
                    type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Ecommerce</button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
                tabindex="0">
                <table class="table table-borderless table-hover container-fluid" style="width: 100%">
                    <thead class="border-bottom">
                        <tr>
                            <th></th>
                            <th scope="col" class="border-end text-center default_cursor_cs" style="width: 20%">
                                <p class="fs-4 ls-1 mb-0 default_cursor_cs">Essential</p>
                                <p class="lead fs-6 lh-1 mb-0 default_cursor_cs">Info Website</p>
                                <div class="brand-bg-primary mx-auto mt-3 mb-2" style="width: 50px; height: 2px;"></div>
                                <p class="mb-0 default_cursor_cs">
                                    <span class="fw-normal superscript">₹</span>
                                    <span class="fs-3">999</span>
                                    <span class="fw-normal">/-</span>
                                </p>
                            </th>
                            <th scope="col" class="border-end text-center default_cursor_cs" style="width: 20%">
                                <p class="fs-4 ls-1 mb-0 default_cursor_cs">Standard</p>
                                <p class="lead fs-6 lh-1 mb-0 default_cursor_cs">Business Website</p>
                                <div class="brand-bg-primary mx-auto mt-3 mb-2" style="width: 50px; height: 2px;"></div>
                                <p class="mb-0 default_cursor_cs">
                                    <span class="fw-normal superscript">₹</span>
                                    <span class="fs-3 default_cursor_cs">1499</span>
                                    <span class="fw-normal">/-</span>
                                </p>
                            </th>
                            <th scope="col" class="border-end text-center default_cursor_cs" style="width: 20%">
                                <p class="fs-4 ls-1 mb-0 default_cursor_cs">Advanced</p>
                                <p class="lead fs-6 lh-1 mb-0">Catalog Website</p>
                                <div class="brand-bg-primary mx-auto mt-3 mb-2" style="width: 50px; height: 2px;"></div>
                                <p class="mb-0">
                                    <span class="fw-normal superscript">₹</span>
                                    <span class="fs-3">2499</span>
                                    <span class="fw-normal">/-</span>
                                </p>
                            </th>
                            <th scope="col" class="border-end text-center" style="width: 20%">
                                <p class="fs-4 ls-1 mb-0 default_cursor_cs">Ultimate</p>
                                <p class="lead fs-6 lh-1 mb-0 default_cursor_cs">Designer Website</p>
                                <div class="brand-bg-primary mx-auto mt-3 mb-2" style="width: 50px; height: 2px;"></div>
                                <p class="mb-0">
                                    <span class="fw-normal superscript">₹</span>
                                    <span class="fs-3 default_cursor_cs">3499</span>
                                    <span class="fw-normal">/-</span>
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="border-start border-end">
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Free Domin</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">.in Domain</span>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <span class="fw-normal">.in Domain</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">.in Domain</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal default_cursor_cs">.in Domain</span>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Email Id</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">SSL Certificate</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Contact Form</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Mobile Responsive</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">SEO friendly</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Google Location Map</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Direct Calling</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Social Links</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Whatsapp Connect</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Payment Detail</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Business Catelog</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Content Writing</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Free Update</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Brand Logo</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">Basic</span>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Development Time</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">1 day*</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">1 day*</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">2 day*</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">2 day*</span>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Customer Support</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">24x7*</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">24x7*</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">24x7*</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">24x7*</span>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Renewal Charges</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">₹ 1000/yr</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">₹ 1000/yr</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">₹ 2000/yr</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">₹ 2000/yr</span>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                <table class="table table-borderless table-hover container-fluid" style="width: 100%">
                    <thead class="border-bottom">
                        <tr>
                            <th></th>
                            <th scope="col" class="border-end text-center default_cursor_cs" style="width: 20%">
                                <p class="fs-4 ls-1 mb-0 default_cursor_cs">Essential</p>
                                <p class="lead fs-6 lh-1 mb-0 default_cursor_cs">Info Website</p>
                                <div class="brand-bg-primary mx-auto mt-3 mb-2" style="width: 50px; height: 2px;"></div>
                                <p class="mb-0 default_cursor_cs">
                                    <span class="fw-normal superscript">₹</span>
                                    <span class="fs-3">999</span>
                                    <span class="fw-normal">/-</span>
                                </p>
                            </th>
                            <th scope="col" class="border-end text-center default_cursor_cs" style="width: 20%">
                                <p class="fs-4 ls-1 mb-0 default_cursor_cs">Standard</p>
                                <p class="lead fs-6 lh-1 mb-0 default_cursor_cs">Business Website</p>
                                <div class="brand-bg-primary mx-auto mt-3 mb-2" style="width: 50px; height: 2px;"></div>
                                <p class="mb-0 default_cursor_cs">
                                    <span class="fw-normal superscript">₹</span>
                                    <span class="fs-3 default_cursor_cs">1499</span>
                                    <span class="fw-normal">/-</span>
                                </p>
                            </th>
                            <th scope="col" class="border-end text-center default_cursor_cs" style="width: 20%">
                                <p class="fs-4 ls-1 mb-0 default_cursor_cs">Advanced</p>
                                <p class="lead fs-6 lh-1 mb-0">Catalog Website</p>
                                <div class="brand-bg-primary mx-auto mt-3 mb-2" style="width: 50px; height: 2px;"></div>
                                <p class="mb-0">
                                    <span class="fw-normal superscript">₹</span>
                                    <span class="fs-3">2499</span>
                                    <span class="fw-normal">/-</span>
                                </p>
                            </th>
                            <th scope="col" class="border-end text-center" style="width: 20%">
                                <p class="fs-4 ls-1 mb-0 default_cursor_cs">Ultimate</p>
                                <p class="lead fs-6 lh-1 mb-0 default_cursor_cs">Designer Website</p>
                                <div class="brand-bg-primary mx-auto mt-3 mb-2" style="width: 50px; height: 2px;"></div>
                                <p class="mb-0">
                                    <span class="fw-normal superscript">₹</span>
                                    <span class="fs-3 default_cursor_cs">3499</span>
                                    <span class="fw-normal">/-</span>
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="border-start border-end">
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Free Domin</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">.in Domain</span>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <span class="fw-normal">.in Domain</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">.in Domain</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal default_cursor_cs">.in Domain</span>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Email Id</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">SSL Certificate</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Contact Form</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Mobile Responsive</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">SEO friendly</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Google Location Map</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Direct Calling</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Social Links</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Whatsapp Connect</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Payment Detail</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Business Catelog</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Content Writing</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Free Update</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Brand Logo</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">Basic</span>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Development Time</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">1 day*</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">1 day*</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">2 day*</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">2 day*</span>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Customer Support</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">24x7*</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">24x7*</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">24x7*</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">24x7*</span>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Renewal Charges</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">₹ 1000/yr</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">₹ 1000/yr</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">₹ 2000/yr</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">₹ 2000/yr</span>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                <table class="table table-borderless table-hover container-fluid" style="width: 100%">
                    <thead class="border-bottom">
                        <tr>
                            <th></th>
                            <th scope="col" class="border-end text-center default_cursor_cs" style="width: 20%">
                                <p class="fs-4 ls-1 mb-0 default_cursor_cs">Essential</p>
                                <p class="lead fs-6 lh-1 mb-0 default_cursor_cs">Info Website</p>
                                <div class="brand-bg-primary mx-auto mt-3 mb-2" style="width: 50px; height: 2px;"></div>
                                <p class="mb-0 default_cursor_cs">
                                    <span class="fw-normal superscript">₹</span>
                                    <span class="fs-3">999</span>
                                    <span class="fw-normal">/-</span>
                                </p>
                            </th>
                            <th scope="col" class="border-end text-center default_cursor_cs" style="width: 20%">
                                <p class="fs-4 ls-1 mb-0 default_cursor_cs">Standard</p>
                                <p class="lead fs-6 lh-1 mb-0 default_cursor_cs">Business Website</p>
                                <div class="brand-bg-primary mx-auto mt-3 mb-2" style="width: 50px; height: 2px;"></div>
                                <p class="mb-0 default_cursor_cs">
                                    <span class="fw-normal superscript">₹</span>
                                    <span class="fs-3 default_cursor_cs">1499</span>
                                    <span class="fw-normal">/-</span>
                                </p>
                            </th>
                            <th scope="col" class="border-end text-center default_cursor_cs" style="width: 20%">
                                <p class="fs-4 ls-1 mb-0 default_cursor_cs">Advanced</p>
                                <p class="lead fs-6 lh-1 mb-0">Catalog Website</p>
                                <div class="brand-bg-primary mx-auto mt-3 mb-2" style="width: 50px; height: 2px;"></div>
                                <p class="mb-0">
                                    <span class="fw-normal superscript">₹</span>
                                    <span class="fs-3">2499</span>
                                    <span class="fw-normal">/-</span>
                                </p>
                            </th>
                            <th scope="col" class="border-end text-center" style="width: 20%">
                                <p class="fs-4 ls-1 mb-0 default_cursor_cs">Ultimate</p>
                                <p class="lead fs-6 lh-1 mb-0 default_cursor_cs">Designer Website</p>
                                <div class="brand-bg-primary mx-auto mt-3 mb-2" style="width: 50px; height: 2px;"></div>
                                <p class="mb-0">
                                    <span class="fw-normal superscript">₹</span>
                                    <span class="fs-3 default_cursor_cs">3499</span>
                                    <span class="fw-normal">/-</span>
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="border-start border-end">
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Free Domin</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">.in Domain</span>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <span class="fw-normal">.in Domain</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">.in Domain</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal default_cursor_cs">.in Domain</span>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Email Id</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">SSL Certificate</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Contact Form</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Mobile Responsive</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">SEO friendly</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Google Location Map</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Direct Calling</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center default_cursor_cs">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Social Links</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Whatsapp Connect</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Payment Detail</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Business Catelog</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Content Writing</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Free Update</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-check2 fs-5 text-success"></i>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Brand Logo</span>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <i class="bi bi-dash fs-5 text-secondary"></i>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">Basic</span>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Development Time</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">1 day*</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">1 day*</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">2 day*</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">2 day*</span>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Customer Support</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">24x7*</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">24x7*</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">24x7*</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">24x7*</span>
                            </th>
                        </tr>
                        <tr class="border-bottom">
                            <th class="pb-1 text-start">
                                <span class="fw-normal">Renewal Charges</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">₹ 1000/yr</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">₹ 1000/yr</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">₹ 2000/yr</span>
                            </th>
                            <th class="pb-1 text-center">
                                <span class="fw-normal">₹ 2000/yr</span>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: "StarterPricing",
}
</script>
<style lang="">

</style>