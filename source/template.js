//Elementの表示、非表示を切り替える。
function toggleElement(id)
{
    let ele = document.getElementById(id);
    if(ele.classList.contains('d-none'))
    {
        ele.classList.remove('d-none');
        ele.classList.add('d-block');
        return;
    }
    if(ele.classList.contains('d-block'))
    {
        ele.classList.remove('d-block');
    }
    ele.classList.add('d-none');
}
