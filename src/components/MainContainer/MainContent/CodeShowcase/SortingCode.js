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
`void selectionSort(int arr[], int n)  
{  
    int i, j, min_idx;  
    for (i = 0; i < n-1; i++)  
    {  
        min_idx = i;  
        for (j = i+1; j < n; j++)  
        if (arr[j] < arr[min_idx])  
            min_idx = j;  
        swap(&arr[min_idx], &arr[i]);  
    }  
}`,
// ======================================================
    mergeSort:
`void merge(int arr[], int l, int m, int r) 
{ 
    // Find sizes of two subarrays to be merged 
    int n1 = m - l + 1; 
    int n2 = r - m; 

    int L[] = new int [n1]; 
    int R[] = new int [n2]; 

    for (int i=0; i<n1; ++i) 
        L[i] = arr[l + i]; 
    for (int j=0; j<n2; ++j) 
        R[j] = arr[m + 1+ j]; 

    int i = 0, j = 0; 
    int k = l; 
    while (i < n1 && j < n2) 
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

    while (i < n1) 
    { 
        arr[k] = L[i]; 
        i++; 
        k++; 
    } 

    while (j < n2) 
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

        int m = (l+r)/2; 
        sort(arr, l, m); 
        sort(arr , m+1, r); 
        merge(arr, l, m, r); 
    } 
} 
`,
// ======================================================
    quickSort:
`int partition(int arr[], int low, int high) 
{ 
    int pivot = arr[high];  
    int i = (low-1); // index of smaller element 
    for (int j=low; j<high; j++) 
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

    return i+1; 
} 

void sort(int arr[], int low, int high) 
{ 
    if (low < high) 
    { 
        int pi = partition(arr, low, high); 
        sort(arr, low, pi-1); 
        sort(arr, pi+1, high); 
    } 
} 
`
}

export default SortingCode;