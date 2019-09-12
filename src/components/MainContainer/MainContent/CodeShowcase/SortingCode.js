const SortingCode = {
// ======================================================
    bubbleSort: 
`void bubbleSort(int arr[])
{
    int n = arr.length;
    for (int i = 0; i < n - 1; i++)
        for (int j = 0; j < n - i - 1; j++)
            if (arr[j] > arr[j + 1])
            {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
}` ,
// ======================================================
    insertionSort: 
`void insertionSort(int arr[]) 
{ 
    int n = arr.length; 
    for (int i = 1; i < n; ++i) { 
        int key = arr[i]; 
        int j = i - 1; 

        while (j >= 0 && arr[j] > key) { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key; 
    } 
}`,
// ======================================================
    selectionSort: 
`void selectionSort(int arr[]) 
{ 
    int n = arr.length; 
    for (int i = 0; i < n-1; i++) 
    { 
        int min_idx = i; 
        for (int j = i+1; j < n; j++) 
            if (arr[j] < arr[min_idx]) 
                min_idx = j; 
        int temp = arr[min_idx]; 
        arr[min_idx] = arr[i]; 
        arr[i] = temp; 
    } 
} `,
// ======================================================
    mergeSort:
`void merge(int arr[], int l, int m, int r) 
{ 
    int p = m - l + 1; 
    int q = r - m; 

    int L[] = new int [p]; 
    int R[] = new int [q]; 

    for (int i = 0; i < p; ++i) 
        L[i] = arr[l + i]; 
    for (int j = 0; j < q; ++j) 
        R[j] = arr[m + 1+ j]; 

    int i = 0, j = 0; 
    int k = l; 
    while (i < p && j < q) 
    { 
        if (L[i] <= R[j]) 
        { 
            arr[k] = L[i]; 
            i++; 
        } 
        else
        { 
            arr[k] = R[j]; 
            j++; 
        } 
        k++; 
    } 

    while (i < p) 
    { 
        arr[k] = L[i]; 
        i++; 
        k++; 
    } 

    while (j < q) 
    { 
        arr[k] = R[j]; 
        j++; 
        k++; 
    } 
} 

void sort(int arr[], int l, int r) 
{ 
    if (l < r) 
    { 
        int m = (l + r)/2; 
        sort(arr, l, m); 
        sort(arr , m + 1, r); 
        merge(arr, l, m, r); 
    } 
} `,
// ======================================================
    quickSort:
`int partition(int arr[], int low, int high) 
{ 
    int pivot = arr[high];  
    int i = (low - 1);
    for (int j = low; j < high; j++) 
    {
        if (arr[j] < pivot) 
        { 
            i++; 
            int temp = arr[i]; 
            arr[i] = arr[j]; 
            arr[j] = temp; 
        } 
    } 
    
    int temp = arr[i+1]; 
    arr[i+1] = arr[high]; 
    arr[high] = temp; 

    return i + 1;
} 

void sort(int arr[], int low, int high) 
{ 
    if (low < high) 
    { 
        int pi = partition(arr, low, high); 
        sort(arr, low, pi-1); 
        sort(arr, pi+1, high); 
    } 
} `
}

export default SortingCode;