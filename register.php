<?php
$externalURL = 'https://form.jotform.com/233641410623042'; // URL of the website you want to fetch content from

// Fetch content from the external website
$externalContent = file_get_contents($externalURL);

// Modify the content if needed
// For example, remove a specific line of code
$modifiedContent = str_replace('<div class="formFooter f6 branding21 "><div class="formFooter-wrapper formFooter-leftSide"><a href="https://www.jotform.com/?utm_source=formfooter&amp;utm_medium=banner&amp;utm_term=233641410623042&amp;utm_content=jotform_logo&amp;utm_campaign=powered_by_jotform_le" target="_blank" class="formFooter-logoLink" aria-label="Jotform Logo"><img class="formFooter-logo" src="https://cdn.jotfor.ms/assets/img/logo2021/jotform-logo-white.svg" alt="Jotform Logo" style="height: 44px;"></a></div><div class="formFooter-wrapper formFooter-rightSide"><span class="formFooter-text">Now create your own Jotform - It’s free!</span><a class="formFooter-button" href="https://www.jotform.com/?utm_source=formfooter&amp;utm_medium=banner&amp;utm_term=233641410623042&amp;utm_content=jotform_button&amp;utm_campaign=powered_by_jotform_le" target="_blank">Create your own Jotform</a></div></div>', '', $externalContent);

// Display the modified content
echo $modifiedContent;
?>
