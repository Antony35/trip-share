<?php

namespace ContainerUPdtItT;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getApiPlatform_SwaggerUi_ContextService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'api_platform.swagger_ui.context' shared service.
     *
     * @return \ApiPlatform\Symfony\Bundle\SwaggerUi\SwaggerUiContext
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/api-platform/symfony/Bundle/SwaggerUi/SwaggerUiContext.php';

        return $container->privates['api_platform.swagger_ui.context'] = new \ApiPlatform\Symfony\Bundle\SwaggerUi\SwaggerUiContext(true, true, true, false, false, false, NULL, []);
    }
}
