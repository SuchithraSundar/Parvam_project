document.addEventListener('DOMContentLoaded', function () {
    // Sidebar toggle
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const adminContainer = document.querySelector('.admin-container');

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function () {
            adminContainer.classList.toggle('sidebar-collapsed');
        });
    }

    // Navigation between sections
    const menuItems = document.querySelectorAll('.sidebar-menu li a');
    const sections = document.querySelectorAll('.section-content');
    const dashboardSection = document.getElementById('dashboard-section');

    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all menu items
            menuItems.forEach(menuItem => {
                menuItem.parentElement.classList.remove('active');
            });

            // Add active class to clicked menu item
            this.parentElement.classList.add('active');

            // Hide all sections
            if (dashboardSection) {
                dashboardSection.style.display = 'none';
            }
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the selected section
            const targetId = this.getAttribute('href').substring(1);
            if (targetId === 'dashboard') {
                if (dashboardSection) {
                    dashboardSection.style.display = 'block';
                }
            } else {
                const targetSection = document.getElementById(`${targetId}-section`);
                if (targetSection) {
                    targetSection.style.display = 'block';
                }
            }
        });
    });

    // Initialize Sales Chart
    const salesChartCanvas = document.getElementById('sales-chart-canvas');
    if (salesChartCanvas) {
        const salesChart = new Chart(salesChartCanvas, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Sales',
                    data: [12500, 15000, 13800, 14900, 16200, 18500, 17800, 19200, 20100, 19500, 21200, 22500],
                    borderColor: '#4caf50',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            label: function (context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });

        // Chart period change
        const chartPeriodSelect = document.getElementById('chart-period');
        if (chartPeriodSelect) {
            chartPeriodSelect.addEventListener('change', function () {
                let labels, data;

                switch (this.value) {
                    case 'weekly':
                        labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                        data = [2800, 3200, 2900, 3500, 4100, 3800, 3200];
                        break;
                    case 'yearly':
                        labels = ['2020', '2021', '2022', '2023', '2024', '2025'];
                        data = [150000, 180000, 210000, 240000, 270000, 220000];
                        break;
                    default: // monthly
                        labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                        data = [12500, 15000, 13  'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                        data = [12500, 15000, 13800, 14900, 16200, 18500, 17800, 19200, 20100, 19500, 21200, 22500];
                        break;
                }

                salesChart.data.labels = labels;
                salesChart.data.datasets[0].data = data;
                salesChart.update();
            });
        }
    }

    // Add Product Modal
    const addNewBtn = document.querySelector('.add-new-btn');
    const addProductModal = document.getElementById('add-product-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const cancelAddProductBtn = document.getElementById('cancel-add-product');

    if (addNewBtn && addProductModal) {
        addNewBtn.addEventListener('click', function () {
            addProductModal.style.display = 'flex';
        });
    }

    if (closeModalBtn && addProductModal) {
        closeModalBtn.addEventListener('click', function () {
            addProductModal.style.display = 'none';
        });
    }

    if (cancelAddProductBtn && addProductModal) {
        cancelAddProductBtn.addEventListener('click', function () {
            addProductModal.style.display = 'none';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function (event) {
        if (event.target === addProductModal) {
            addProductModal.style.display = 'none';
        }
    });

    // Product image preview
    const productImageInput = document.getElementById('product-image');
    const imagePreview = document.getElementById('image-preview');

    if (productImageInput && imagePreview) {
        productImageInput.addEventListener('change', function () {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    imagePreview.innerHTML = `<img src="${e.target.result}" alt="Product Preview">`;
                };
                reader.readAsDataURL(file);
            } else {
                imagePreview.innerHTML = '';
            }
        });
    }

    // Select all products checkbox
    const selectAllProducts = document.getElementById('select-all-products');
    const productCheckboxes = document.querySelectorAll('.product-checkbox');

    if (selectAllProducts && productCheckboxes.length > 0) {
        selectAllProducts.addEventListener('change', function () {
            productCheckboxes.forEach(checkbox => {
                checkbox.checked = this.checked;
            });
        });

        productCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                const allChecked = Array.from(productCheckboxes).every(checkbox => checkbox.checked);
                const someChecked = Array.from(productCheckboxes).some(checkbox => checkbox.checked);

                selectAllProducts.checked = allChecked;
                selectAllProducts.indeterminate = someChecked && !allChecked;
            });
        });
    }

    // Save product form
    const saveProductBtn = document.getElementById('save-product');
    const addProductForm = document.getElementById('add-product-form');

    if (saveProductBtn && addProductForm) {
        saveProductBtn.addEventListener('click', function () {
            // Validate form
            if (addProductForm.checkValidity()) {
                // Simulate form submission
                alert('Product saved successfully!');
                addProductModal.style.display = 'none';

                // Reset form
                addProductForm.reset();
                if (imagePreview) {
                    imagePreview.innerHTML = '';
                }
            } else {
                // Trigger form validation
                addProductForm.reportValidity();
            }
        });
    }
});